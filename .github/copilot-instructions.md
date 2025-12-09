# AI Coding Agent Instructions

## Project Overview

This is an **Angular Level 200 training template** featuring a Star Wars-themed game application built with Angular 19. The workspace contains three main projects:

1. **starwars-game**: Main Angular workspace with monorepo structure
   - `game`: Primary application (port 4201)
   - `search-bar`: Reusable library component (`pfd` prefix)
   - `statistics`: Reusable library component (`lib` prefix)
2. **api/long-api/game-api**: Express.js backend (port 3000)
3. **test-mono-repo**: Secondary test monorepo
4. **tree-typescript**: TypeScript examples

## Architecture Patterns

### Component Prefix Convention
- **Application components**: `game` prefix
- **search-bar library**: `pfd` prefix  
- **statistics library**: `lib` prefix

### Service Layer Pattern (Business/Service Split)
The project uses a **two-tier service architecture**:

```typescript
// Raw HTTP service (infrastructure layer)
@Injectable({ providedIn: 'root' })
export class GameService {
  getAll(filter = '', nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems);
  }
}

// Business logic service (application layer)
@Injectable()
export class GameBusiness {
  private readonly games$ = this.searchBarService.asObservable.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter(search => !!search && search.query.length >= 2),
    switchMap(search => this.gameService.getAll(search!.query, 3))
  );
}
```

**Pattern**: Components inject `*Business` services, not raw `*Service` classes. Business services handle operators, state management, and cross-service coordination.

### Library Communication via Services
Libraries communicate through shared services, not direct dependencies:
- `search-bar` library exports `SearchBarService` with `BehaviorSubject` store
- Other components/libraries inject `SearchBarService` to subscribe to search events
- See `statistics.business.ts` injecting `SearchBarService` from external library

### Standalone vs Module Components
- **Libraries** (`search-bar`, `statistics`): Use standalone components with `imports` array
- **Application**: Mix of NgModule (e.g., `GameModule`, `HeaderModule`) and standalone components
- Standalone components use template control flow: `@if`, `@for`, `@let` (Angular 19 syntax)

## Critical Developer Workflows

### Build & Run
```bash
# Start development (auto-builds libs, starts API via PM2, serves on 4201)
npm run start

# Build libraries only (required before app build)
npm run build:libs

# Production build (auto-runs build:libs first)
npm run build
```

**Important**: `prestart` and `prebuild` hooks automatically build libraries. The app references libraries via `dist/` paths in `tsconfig.json`:

```json
"paths": {
  "search-bar": ["./dist/search-bar"],
  "statistics": ["./dist/statistics"]
}
```

### API Management
The Express API is managed via **PM2**:
```bash
npm run start:api  # pm2 restart ../api/long-api/game-api/bin/www
```

API runs on port 3000. Development proxy configured in `projects/game/src/proxies/proxy.conf.json`:
```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

### Environment Configuration
Two separate environment files:
- `environment.ts` / `environment.prod.ts`: General config
- `api.ts` / `api.prod.ts`: API endpoint definitions

Both are replaced during production builds via `fileReplacements` in `angular.json`.

## Project-Specific Conventions

### Model Creation Pattern
Use factory functions for models with default values:

```typescript
export const createSearch = (): Search => ({
  query: '',
});
```

### Dependency Injection Style
- Use `inject()` function (not constructor injection):
```typescript
private readonly business = inject(StatisticsBusiness);
```

### Template Syntax (Angular 19.2+)
- Control flow: `@if`, `@for`, `@let` (not `*ngIf`, `*ngFor`)
- Async pipe with `@let`: `@let stats = stats$ | async;`
- Track in loops: `@for (item of items; track item)`

### Testing Lifecycle
```bash
npm run test  # Runs pretest (lint) then karma tests
```

Tests must pass linting before execution.

## Integration Points

### Backend API
- **GET /api/games?max={number}**: Returns game array, dynamically generates {max} items
- Model: `Game(id, title, status)` where status is `index % 2`
- Frontend expects `GameDto[]` matching this structure

### Library Exports
- **search-bar**: Exports `SearchBarComponent`, `SearchBarService`, `Search` model
- **statistics**: Exports `StatisticsComponent`, `StatisticsService`, `StatisticsBusiness`, `StatItem` model

Check `public-api.ts` in each library for exported symbols.

## Key Files & Directories

- `projects/game/src/app/features/`: Feature modules (game, etc.)
- `projects/game/src/app/shared/`: Reusable components, directives, pipes
- `projects/game/src/app/core/`: Core models (e.g., `game.dto.ts`)
- `projects/{lib}/src/lib/`: Library source code
- `projects/{lib}/src/public-api.ts`: Library public API surface

## Common Pitfalls

1. **Library changes not reflected**: Run `npm run build:libs` manually if hot reload fails
2. **PM2 not running**: Ensure PM2 is installed globally and API process exists
3. **Path imports**: Always use library name (`'search-bar'`), never relative paths across libraries
4. **Provider scope**: Business services often use module-level `@Injectable()`, not `providedIn: 'root'`

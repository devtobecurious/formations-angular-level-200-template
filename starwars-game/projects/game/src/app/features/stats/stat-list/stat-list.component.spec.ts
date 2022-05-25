import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GridConfigService } from '../../../shared/ui/components/grid-custom/services/grid-config.service';
import { StatService } from '../services/stat.service';
import { StatListComponent } from './stat-list.component';


// const value: StatService = {
//   getAll: () => {
//     return of([
//       { id: 1, title: 'test1', value: 1,  },
//       { id: 2, title: 'test2', value: 2,  }
//     ]);
//   }
// }

fdescribe('StatListComponent', () => {
  let component: StatListComponent;
  let fixture: ComponentFixture<StatListComponent>;
  let mock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatListComponent ],
      providers: [
        // { provide: StatService, useValue: value },
      ],
      imports: [
        // HttpClientModule
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    mock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(StatListComponent);
    component = fixture.componentInstance;
    // fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list (2) of stats', () => {
    // component.items = [
    //   { id: 1, title: 'test1', value: 1,  },
    //   { id: 2, title: 'test2', value: 2,  },
    // ];

    fixture.detectChanges();

    const request = mock.expectOne('test');
    expect(request.request.method).toBe('GET');

    // fixture.detectChanges();

    request.flush([
      { id: 1, title: 'test1', value: 1,  },
      { id: 2, title: 'test2', value: 2,  },
    ]);

    fixture.detectChanges();


    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();

    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(2);
  });
});

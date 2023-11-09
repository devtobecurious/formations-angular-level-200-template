import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const MonactionActions = createActionGroup({
  source: 'Monaction',
  events: {
    'Load Monactions': emptyProps(),
    
    
  }
});

import { Injectable } from '@angular/core';
import { Config } from '../models/config';

@Injectable()
export class GridConfigService {
  config: Config | undefined;

  constructor() { }


}

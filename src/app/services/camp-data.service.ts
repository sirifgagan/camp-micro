import { environment } from './../../environments/environment.prod';

import { Injectable } from '@angular/core';
import { SelectItem } from '../interfaces/i-select-item';
import { resolve } from 'path';

@Injectable()
export class CampDataService {

  constructor() { }
  public getCamps(): Promise<SelectItem[]> {
    return new Promise((resolve, reject) => {
      resolve([{
        label: '61st',
        value: '61',
        selected: false
      }, {
        label: '62nd',
        value: '62',
        selected: false
      }, {
        label: '63rd',
        value: '63',
        selected: false
      }, {
        label: '64th',
        value: '64',
        selected: false
      }, {
        label: '65th',
        value: '65',
        selected: true
      }, {
        label: '66th',
        value: '66',
        selected: false
      }, {
        label: '67th',
        value: '67',
        selected: false
      }, {
        label: '68th',
        value: '68',
        selected: false
      }])
    })
  }

  public getCamperData(campNo: number):Promise<any>{
    console.info('loading camperd for camp',environment)
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  }

}

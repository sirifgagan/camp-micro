import { SelectItem } from './../interfaces/i-select-item';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class CampSelectionSyncService {

  constructor() { }
  private source = new BehaviorSubject('');
  private selectedCampSynchronizer = this.source.asObservable();
  private selectedCamp;
  setSelectCamp(campNo: string) {
    this.selectedCamp = campNo;
    this.source.next(campNo);
  }
  getSelectedCamp() {
    this.selectedCamp
  }
  get synchronizer() {
    return this.selectedCampSynchronizer;
  }
}

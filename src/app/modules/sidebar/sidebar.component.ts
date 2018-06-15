import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from '../../interfaces/i-select-item';
import { CampDataService } from '../../services/camp-data.service';
import { CampSelectionSyncService } from '../../services/camp-selection-sync.service';


declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  render: boolean;
}
export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Camp Management', icon: 'pe-7s-graph', class: '', render: false },
  { path: 'dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '', render: true },
  { path: 'user', title: 'User Profile', icon: 'pe-7s-user', class: '', render: true },
  { path: 'table', title: 'Table List', icon: 'pe-7s-note2', class: '', render: true },
  { path: 'typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '', render: true },
  { path: 'icons', title: 'Icons', icon: 'pe-7s-science', class: '', render: true },
  { path: 'maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '', render: true },
  { path: 'notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '', render: true }//,
  // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  private campList: SelectItem[];
  private selectedCamp: string;

  constructor(private dataSrv: CampDataService, private syncService: CampSelectionSyncService, private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.syncService.synchronizer.subscribe(campNo => { this.selectedCamp = campNo });
    this.dataSrv.getCamps().then(list => {
      this.campList = list;
      for (let i = 0, len = this.campList.length; i < len; i++) {
        if (this.campList[i].selected) {
          this.selectedCamp = this.campList[i].value;
          this.syncService.setSelectCamp(this.selectedCamp);
        }
      }
    }).catch(error => {
      console.error(error);
    });

  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
  onSelect(campNo: string) {
    this.selectedCamp = campNo;
    this.syncService.setSelectCamp(this.selectedCamp);

    let url: string[] = this.router.url.split('/');
    url.splice(url.length - 1, 1, campNo);

    this.router.navigate(url)
  }
}

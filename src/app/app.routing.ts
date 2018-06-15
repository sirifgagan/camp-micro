import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { TablesComponent } from './components/tables/tables.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { IndexComponent } from './components/index/index.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
  { path: 'dashboard/:campNo', component: HomeComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'user/:campNo', component: UserComponent },
  //{ path: 'table', component: TablesComponent },
  { path: 'table/:campNo', component: TableComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },
  { path: '', component: IndexComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes/*, { enableTracing: true }*/)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

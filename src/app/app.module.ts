import { CampSelectionSyncService } from './services/camp-selection-sync.service';
import { CampDataService } from './services/camp-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { TablesComponent } from './components/tables/tables.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UpgradeComponent } from './components/upgrade/upgrade.component';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { AppComponent } from './components/app.component';
import { NavbarModule } from './modules/navbar/navbar.module';
import { FooterModule } from './modules/footer/footer.module';
import { LbdModule } from './modules/lbd/lbd.module';
import { IndexComponent } from './components/index/index.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TableComponent } from './components/table/table.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    IndexComponent,
    TableComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    //SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
   Ng2SmartTableModule
  ],
  providers: [CampDataService, CampSelectionSyncService],
  bootstrap: [AppComponent]
})
export class AppModule { }

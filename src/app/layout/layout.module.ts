import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { LicencesModule } from './licences/licences.module';
import { ServersModule } from './servers/servers.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        LicencesModule,
        ServersModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        // TranslateModule,
        HttpClientModule
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, ProfileComponent ]

})
export class LayoutModule { }

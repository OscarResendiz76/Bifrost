import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent, ModalViewerServers, NewUser } from './servers.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServersRoutingModule } from './servers-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
// import { TranslateModule } from '@ngx-translate/core';
import { MainService } from 'src/app/shared/services/main/main.service';

import { StatModule } from 'src/app/shared/modules/stat/stat.module';

import { DialogOverviewServers } from './servers.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    ServersRoutingModule,
    Ng2SearchPipeModule,
    MatGridListModule,
    StatModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    // TranslateModule,
    NgbModule,
    MatDialogModule, MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    // SEARCH BAR
    MatInputModule,
    // END SEARCH BAR
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [ServersComponent, DialogOverviewServers, ModalViewerServers, NewUser],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  MainService],
  bootstrap: [ServersComponent],
  exports: [ServersComponent],
  entryComponents: [DialogOverviewServers, ModalViewerServers, NewUser]
})
export class ServersModule { }

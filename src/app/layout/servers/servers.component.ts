import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/shared/services/main/main.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Main } from 'src/app/shared/models/main';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.scss']
})

export class ServersComponent implements OnInit {

  constructor(private userService: MainService, public dialog: MatDialog) {
    console.log(this.dataSource);
    userService.usersMain().subscribe((data) => {
      console.warn('data');
      this.dataSource = data;
    });
  }
  displayedColumns: string[] = [
    'Id',
    'OwnerName',
    'UserName',
    'Password',
    'Category',
    'Access',
    'Resource',
    'Instructions',
    'Notes',
    'Extras'
  ];
  dataSource;
  user;
  users: Main[];
  // dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  filterTerm!: string;


  ngOnInit() {
    this.dataSource.filterPredicate = function (record, filter) {
      return record.Gender.toLocaleLowerCase() === filter.toLocaleLowerCase();
    };
  }

  addItem() {
    // tslint:disable-next-line:max-line-length
    /*const newRow = {'Id': 10, 'OwnerName': '', 'UserName': '', 'Password': '', 'Category': '', 'Access': '', 'Resource:' : '', 'Instructions': '', 'Notes': '', 'Extras': '', isEdit: true};
    this.dataSource = [...this.dataSource, newRow];*/

    const newRow = this.dialog.open(NewUser);
    this.dataSource = [...this.dataSource, newRow];

    newRow.afterClosed().subscribe(result => {

    });

  }


  editUser(user) {
    const dialogRef = this.dialog.open(DialogOverviewServers, {
      width: '450px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = user;
    });
  }

  seeItem(user) {
    const dialogView = this.dialog.open(ModalViewerServers, {
      width: '450px',
      data: user
    });
  }

  removeRow(id: number) {
    console.log(this.dataSource);
    this.dataSource = this.dataSource.filter((u) => u.Id !== id);
    console.log(this.dataSource);
  }
}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-overview-servers',
  templateUrl: 'dialog.html',
})

// tslint:disable-next-line:component-class-suffix
export class DialogOverviewServers {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewServers>,
    @Inject(MAT_DIALOG_DATA) public data: Main) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-viewer-servers',
  templateUrl: 'modalview.html',
  styleUrls: ['servers.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ModalViewerServers {

  constructor(
    public dialogRef: MatDialogRef<ModalViewerServers>,
    @Inject(MAT_DIALOG_DATA) public data: Main) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-user-servers',
  templateUrl: 'newuser.html',
  styleUrls: ['servers.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class NewUser {

  constructor(
    public dialogRef: MatDialogRef<NewUser>,
    @Inject(MAT_DIALOG_DATA) public data: Main) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



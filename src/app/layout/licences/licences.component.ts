import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/shared/services/main/main.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Main } from 'src/app/shared/models/main';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-licences',
  templateUrl: 'licences.component.html',
  styleUrls: ['licences.component.scss']
})

export class LicencesComponent implements OnInit {

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

    const newRow = this.dialog.open(NewUserLicences);
    this.dataSource = [...this.dataSource, newRow];

    newRow.afterClosed().subscribe(result => {

    });

  }


  editUser(user) {
    const dialogRef = this.dialog.open(DialogOverviewLicences, {
      width: '450px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = user;
    });
  }

  seeItem(user) {
    const dialogView = this.dialog.open(ModalViewerLicences, {
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
  selector: 'dialog-overview-licences',
  templateUrl: 'dialog.html',
})

// tslint:disable-next-line:component-class-suffix
export class DialogOverviewLicences {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewLicences>,
    @Inject(MAT_DIALOG_DATA) public data: Main) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-viewer-licences',
  templateUrl: 'modalview.html',
  styleUrls: ['licences.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class ModalViewerLicences {

  constructor(
    public dialogRef: MatDialogRef<ModalViewerLicences>,
    @Inject(MAT_DIALOG_DATA) public data: Main) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-user-licences',
  templateUrl: 'newuserlicences.html',
  styleUrls: ['licences.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class NewUserLicences {

  constructor(
    public dialogRef: MatDialogRef<NewUserLicences>,
    @Inject(MAT_DIALOG_DATA) public data: Main) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}



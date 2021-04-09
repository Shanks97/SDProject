import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
 usuId: number;
 name: string;
 lastName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{usuId: 1, name: 'Juan', lastName: 'Cortés'},
{usuId: 2, name: 'Gabo', lastName: 'Arias'},
{usuId: 3, name: 'Nicolas', lastName: 'Perez'},
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['usuId', 'name'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.data = ELEMENT_DATA
    this.dataSource.sort = this.sort;
  }

  search(){
    console.log('aaaa');
  }
}
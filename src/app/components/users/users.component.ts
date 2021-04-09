import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

export interface PeriodicElement {
 usuId: number;
 name: string;
 lastName: string;
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['usuId', 'nombre'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService){
    
  }

  ngAfterViewInit() {
    this.search();
  }

  search(){
    this.dataSource.data = [];
    this.userService.getUsers().subscribe(data =>{
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    });
  }
}
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import * as DataJson  from '../assets/table_data.json';
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'dashboard',
  styleUrls: ['dashboard.css'],
  templateUrl: 'dashboard.html',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    // BrowserModule,
  ],
})
export class Dashboard implements AfterViewInit {
  dataEntries: any[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataEntries = Array.from(DataJson)
    this.displayedColumns = this.getHeaders();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.dataEntries);
  }

  getHeaders() {
    let headers: string[] = [];
    if (this.dataEntries) {
      this.dataEntries.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key);
          }
        });
      });
    }
    return headers;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

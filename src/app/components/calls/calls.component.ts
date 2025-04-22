import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CallRecord } from '../../model/CallRecord';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CallRecordService } from '../../services/call-record.service';

@Component({
  selector: 'app-calls',
  standalone: false,
  templateUrl: './calls.component.html',
  styleUrl: './calls.component.css'
})
export class CallsComponent {
  displayedColumns: string[] = [
    'status',
    'callRef',
    'caseNumber',
    'callDate',
    'callerName',
    'deceasedName',
    'client',
    'type',
    'funeralDate'
  ];

  dataSource = new MatTableDataSource<CallRecord>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private callService: CallRecordService) {}

  ngOnInit() {
    this.callService.getCalls().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

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
  calls: any[] = [];

  constructor(private callService: CallRecordService) {}

  ngOnInit() {
    this.callService.getCalls().subscribe(data => {
      this.calls = data;
    });
  }

  displayedColumns: string[] = ['status', 'callRef', 'caseNumber', 'callDate', 'callerName', 'deceasedName', 'client', 'type', 'funeralDate'];
  dataSource = [
    {
      status: 'C',
      callRef: 'FMS0817719',
      caseNumber: '',
      callDate: '2021-06-02',
      callerName: 'Jannied Sannie',
      deceasedName: '',
      client: '1Life-Agency1',
      type: 'AVS-Legal Assist',
      funeralDate: ''
    },
    {
      status: 'A',
      callRef: 'FMS0817718',
      caseNumber: '',
      callDate: '2021-06-02',
      callerName: 'Jannie Sannie',
      deceasedName: '',
      client: '1Life-Agency1',
      type: 'AVS-Benefit Info AVS',
      funeralDate: ''
    },
    {
      status: 'A',
      callRef: 'FMS0817717',
      caseNumber: 'CN20G0141',
      callDate: '2020-07-07',
      callerName: 'Sue – Friend Thomas',
      deceasedName: 'Anne Ghalagher',
      client: 'OMGS-Policies',
      type: 'FUN-Repat RSA',
      funeralDate: ''
    },
    {
      status: 'C',
      callRef: 'FMS0817716',
      caseNumber: '',
      callDate: '2020-07-07',
      callerName: 'Sidwell Bendeni',
      deceasedName: '',
      client: 'OMGS-Policies',
      type: 'FUN-Death Claim',
      funeralDate: ''
    },
    {
      status: 'C',
      callRef: 'FMS0817715',
      caseNumber: '',
      callDate: '2020-07-07',
      callerName: 'Manqoba Mango',
      deceasedName: '',
      client: 'Sanlam Sky-Policies',
      type: 'OTH-Redirect General',
      funeralDate: ''
    },
    {
      status: 'X',
      callRef: 'FMS0817714',
      caseNumber: '',
      callDate: '2020-07-07',
      callerName: 'Charrissa Miller',
      deceasedName: '',
      client: 'OMGS-Policies',
      type: 'AVS-Legal Assist',
      funeralDate: ''
    },
    {
      status: 'C',
      callRef: 'FMS0817713',
      caseNumber: 'CN20G0140',
      callDate: '2020-07-07',
      callerName: 'Zodwa Xgowa – Aluyi-Kuhla Funerals',
      deceasedName: 'Siyabonga Mafaya',
      client: 'Megaphase - 2 Advanced (INACTIVE)',
      type: 'AVS-Health Assist',
      funeralDate: 'Sat, 2020-07-11'
    },
    {
      status: 'C',
      callRef: 'FMS0817712',
      caseNumber: 'CN20G0139',
      callDate: '2020-07-07',
      callerName: 'Nadia Gouws-',
      deceasedName: 'Bulelwa Nondonga',
      client: 'OMGS-Societies',
      type: 'FUN-Repat RSA',
      funeralDate: 'Sat, 2020-07-11'
    }
  ];
}

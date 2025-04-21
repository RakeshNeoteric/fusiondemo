import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CallRecord } from '../model/CallRecord';

@Injectable({
  providedIn: 'root'
})
export class CallRecordService {

  private apiUrl = 'http://localhost:3000/callRecords';

  constructor(private http: HttpClient) {}

  getCalls(): Observable<CallRecord[]> {
    return this.http.get<CallRecord[]>(this.apiUrl);
  }
}

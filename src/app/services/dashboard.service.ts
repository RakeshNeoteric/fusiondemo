import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SummaryStats } from '../model/SummaryStats';
import { Observable } from 'rxjs';
import { SalesData } from '../model/SalesData';
import { MonthlyIncome } from '../model/MonthlyIncome';
import { CountryEarnings } from '../model/CountryEarnings';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getSummaryStats(): Observable<SummaryStats> {
    return this.http.get<SummaryStats>(`${this.api}/summaryStats`);
  }

  getSalesData(): Observable<SalesData> {
    return this.http.get<SalesData>(`${this.api}/sales`);
  }

  getMonthlyIncome(): Observable<MonthlyIncome[]> {
    return this.http.get<MonthlyIncome[]>(`${this.api}/monthlyIncome`);
  }

  getCountryEarnings(): Observable<CountryEarnings[]> {
    return this.http.get<CountryEarnings[]>(`${this.api}/countryEarnings`);
  }
}

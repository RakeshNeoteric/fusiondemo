import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, switchMap } from 'rxjs';
import { SidebarItem } from '../../model/SidebarItem';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private baseUrl = 'http://localhost:8080/api/sidebar';

  constructor(private http: HttpClient) {}

  getSidebarItems(): Observable<SidebarItem[]> {
    return this.http.get<SidebarItem[]>(this.baseUrl);
  }

  addSidebarItem(item: SidebarItem): Observable<SidebarItem> {
    return this.http.post<SidebarItem>(this.baseUrl, item);
  }
}

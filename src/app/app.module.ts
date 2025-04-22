import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CallsComponent } from './components/calls/calls.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { AreacodeComponent } from './components/areacode/areacode.component';
import { CallMenuComponent } from './components/call-menu/call-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; // For Card container
import { FlexLayoutModule } from '@angular/flex-layout'; // For Flex Layout
import { MatDividerModule } from '@angular/material/divider';
import { StatsSummaryComponent } from './components/stats-summary/stats-summary.component';
import { TotalSalesComponent } from './components/total-sales/total-sales.component';
import { NetIncomeComponent } from './components/net-income/net-income.component';
import { EarningsByLocationComponent } from './components/earnings-by-location/earnings-by-location.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    CallsComponent,
    ClaimsComponent,
    AreacodeComponent,
    CallMenuComponent,
    StatsSummaryComponent,
    TotalSalesComponent,
    NetIncomeComponent,
    EarningsByLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    NgChartsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

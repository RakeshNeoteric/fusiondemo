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
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridAngular } from 'ag-grid-angular';
import { SidebartestingComponent } from './components/sidebartesting/sidebartesting/sidebartesting.component';
import { AgGridModule } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
// 👇 Register all modules
ModuleRegistry.registerModules([AllCommunityModule]);


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
    EarningsByLocationComponent,
    SidebartestingComponent,
    LoginComponent
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
    NgChartsModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AgGridAngular,
    AgGridModule,
    FormsModule
    
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

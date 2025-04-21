import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CallsComponent } from './components/calls/calls.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { AreacodeComponent } from './components/areacode/areacode.component';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [



  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calls', component: CallsComponent },
    { path:'claims',component: ClaimsComponent},
    { path:'areacode',component:AreacodeComponent},
  // add other routes...
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

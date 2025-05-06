import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CallsComponent } from './components/calls/calls.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { AreacodeComponent } from './components/areacode/areacode.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [



  { path: '', redirectTo:'home', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent        },
  { path: '', component: SidebarComponent, 
    children:[ 
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
      },
      {
        path:'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',

      },
      {
        path:'claims',
        component: ClaimsComponent,
        title: 'Claims',
      },
      {
        path:'**',
        redirectTo: 'login',
      }
    

    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { MonthlyIncome } from '../../model/MonthlyIncome';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-net-income',
  standalone: false,
  templateUrl: './net-income.component.html',
  styleUrl: './net-income.component.css'
})
export class NetIncomeComponent implements OnInit{
  monthlyIncome: MonthlyIncome[] = [];

  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getMonthlyIncome().subscribe((data) => {
      this.monthlyIncome = data;
    });
  }
}

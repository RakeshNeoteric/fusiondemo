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
  barChartLabels: string[] = [];
  barChartData: any;
  barChartOptions: any;

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.service.getMonthlyIncome().subscribe((data) => {
      this.monthlyIncome = data;

      const labels = data.map(d => d.month);
      const values = data.map(d => d.value);

      this.barChartLabels = labels;
      this.barChartData = {
        labels: this.barChartLabels,
        datasets: [
          {
            data: values,
            label: 'Net Income',
            backgroundColor: '#4e73df'
          }
        ]
      };

      this.barChartOptions = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: Math.max(...values) + 2,
            ticks: {
              stepSize: 1.25
            }
          }
        }
      };
    });
  }
 
}

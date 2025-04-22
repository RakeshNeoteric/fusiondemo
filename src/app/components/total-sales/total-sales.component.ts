import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { SalesData } from '../../model/SalesData';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-total-sales',
  standalone: false,
  templateUrl: './total-sales.component.html',
  styleUrl: './total-sales.component.css'
})
export class TotalSalesComponent implements OnInit {
  totalSales!: SalesData;
          

  public doughnutChartLabels: string[] = ['Direct Sales', 'Referral Sales', 'Affiliate Sales'];
  public doughnutChartData: any = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [], // Will be updated via API
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  public chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
       // position: 'top',
       display:false
      },
      title: {
        display: true,
        text: 'Total Sales Overview'
      }
    }
  };
 

  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getSalesData().subscribe((data: SalesData) => {
      this.doughnutChartData.datasets[0].data = [data.direct, data.referral, data.affiliate];
      this.totalSales = data;

    });
  }
}

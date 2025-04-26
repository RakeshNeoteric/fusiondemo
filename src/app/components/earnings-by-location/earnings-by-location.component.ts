import { Component, OnInit } from '@angular/core';
import { CountryEarnings } from '../../model/CountryEarnings';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-earnings-by-location',
  standalone: false,
  templateUrl: './earnings-by-location.component.html',
  styleUrl: './earnings-by-location.component.css'
})
export class EarningsByLocationComponent implements OnInit {
  earnings: CountryEarnings[] = [];
  // barChartData: ChartConfiguration<'bar'>['data'] = {
  //   labels: [],
  //   datasets: [{
  //     data: [],
  //     backgroundColor: [],
  //     label: ''
  //   }]
  // };
  // barChartOptions: ChartConfiguration<'bar'>['options'] = {
  //   responsive: true,
  //   indexAxis: 'y' // horizontal bar
  // };

  constructor(private earningService: DashboardService) {}

  ngOnInit(): void {
    this.earningService.getCountryEarnings().subscribe(data => {
      this.earnings = data;
     // this.barChartData.labels = data.map(e => e.country);
    //  this.barChartData.datasets[0].data = data.map(e => e.percentage);
     // this.barChartData.datasets[0].backgroundColor = data.map(e => e.color);
    });
  }
}

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

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.service.getCountryEarnings().subscribe((data) => {
      this.earnings = data;
    });
  }
}

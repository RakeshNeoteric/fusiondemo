import { Component, OnInit } from '@angular/core';
import { SummaryStats } from '../../model/SummaryStats';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-stats-summary',
  standalone: false,
  templateUrl: './stats-summary.component.html',
  styleUrl: './stats-summary.component.css'
})
export class StatsSummaryComponent implements OnInit {
  stats!: SummaryStats;

  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getSummaryStats().subscribe((data) => (this.stats = data));
  }
}

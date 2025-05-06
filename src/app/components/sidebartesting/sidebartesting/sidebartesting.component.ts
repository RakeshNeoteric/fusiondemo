import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';
import { SidebarItem } from '../../../model/SidebarItem';

@Component({
  selector: 'app-sidebartesting',
  standalone: false,
  templateUrl: './sidebartesting.component.html',
  styleUrl: './sidebartesting.component.css'
})
export class SidebartestingComponent implements OnInit {
  sidebarItems: SidebarItem[] = [];

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.getSidebarItems().subscribe({
      next: (items) => {
        this.sidebarItems = items;
      },
      error: (error) => {
        console.error('Error fetching sidebar items', error);
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  currentDateTime: string = '';
  currentPage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setCurrentDateTime();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.extractCurrentPageFromUrl(event.urlAfterRedirects);
      }
    });
  }

  setCurrentDateTime(): void {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    };
    this.currentDateTime = now.toLocaleDateString('en-US', options);
  }
  extractCurrentPageFromUrl(url: string): void {
    const segments = url.split('/').filter(segment => segment); // Remove empty segments
    const lastSegment = segments[segments.length - 1];
  
    if (lastSegment) {
      // Convert kebab-case or snake_case to Title Case
      this.currentPage = lastSegment
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
    } else {
      this.currentPage = 'Home';
    }
  }



}

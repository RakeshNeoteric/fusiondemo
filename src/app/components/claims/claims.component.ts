import { Component } from '@angular/core';
import { ClaimsService } from '../../services/claims/claims.service';
import { Claim } from '../../model/Claim';

@Component({
  selector: 'app-claims',
  standalone: false,
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent {
  // claims: Claim[] = [];

  // constructor(private claimService: ClaimsService) {}

  // ngOnInit(): void {
  //   this.claimService.getClaims().subscribe((data) => {
  //     this.claims = data;
  //   });
  // }
  claims: Claim[] = [];
  filteredClaims: Claim[] = [];

  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 20;

  constructor(private claimService: ClaimsService) {}

  ngOnInit(): void {
    this.claimService.getClaims().subscribe(data => {
      this.claims = data;
      this.filteredClaims = [...this.claims];
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredClaims = this.claims.filter(claim =>
      Object.values(claim).some(value =>
        String(value).toLowerCase().includes(filterValue)
      )
    );
    this.currentPage = 1; // Reset to first page after filter
  }

  get paginatedClaims(): Claim[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredClaims.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredClaims.length / this.itemsPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}

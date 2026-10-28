import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  template: `
    <section class="page-card">
      <h1>Transaction History</h1>
      <p>No transactions to display yet.</p>
    </section>
  `
})
export class TransactionsComponent {}

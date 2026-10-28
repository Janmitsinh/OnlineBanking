import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  totalBalance = '$15,420.00';

  accounts = [
    {
      type: 'Checking',
      balance: '$10,250'
    },
    {
      type: 'Savings',
      balance: '$5,170'
    }
  ];

  transactions = [
    {
      description: 'Payroll Deposit',
      amount: '+$1000'
    },
    {
      description: 'Amazon Purchase',
      amount: '-$50'
    },
    {
      description: 'Internal Transfer',
      amount: '-$100'
    }
  ];
}
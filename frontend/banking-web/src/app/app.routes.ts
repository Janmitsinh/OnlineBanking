import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout.component';

export const routes: Routes =[
    {
        path: '',
        component: MainLayoutComponent,
        children: [
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        },
        {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/component/dashboardComponent')
            .then(m => m.DashboardComponent)
        },
        {
        path: 'accounts',
        loadComponent: () =>
          import('./features/accounts/accounts.component')
            .then(m => m.AccountsComponent)
        },
        {
        path: 'transactions',
        loadComponent: () =>
          import('./features/transactions/transactions.component')
            .then(m => m.TransactionsComponent)
        },
        {
        path: 'transfers',
        loadComponent: () =>
          import('./features/transfers/transfers.component')
            .then(m => m.TransfersComponent)
        },
        {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile.component')
            .then(m => m.ProfileComponent)
        }
        ]
    }
]
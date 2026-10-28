export interface Account {
    id : string;
    accountNumber: string;
    type: 'checking' | 'Savings';
    balance: number;
}
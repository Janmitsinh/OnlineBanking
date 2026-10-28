# OnlineBanking

```mermaid
flowchart TD
	frontend[Angular Frontend]
	https[HTTPS]
	gateway[API Gateway]
	lambda[AWS Lambda<br>(Auth Service)]
	express[Express APIs<br>(Account Service)]
	database[(Database<br>(PostgreSQL))]

	frontend --> https --> gateway
	gateway --> lambda
	gateway --> express
	lambda --> database
```

## README Styling

```css
a {
		text-decoration: none;
		color: #464feb;
}

tr th,
tr td {
		border: 1px solid #e6e6e6;
}

tr th {
		background-color: #f5f5f5;
}
```

# Phase 1: Basic Online Banking

## Features

### User Authentication

- Sign up
- Login
- Forgot password
- MFA (later)

**Technologies:** Angular, Node.js, Express, JWT, bcrypt

**Concepts learned:**

- Authentication
- Authorization
- Session management
- JWT tokens

### Bank Accounts

Users can have:

- Chequing accounts
- Savings accounts

**Database:**

```typescript
type Account = {
		accountId: string;
		userId: string;
		accountType: string;
		balance: number;
};
```

**Concepts learned:**

- Relational databases
- Account ownership
- Balance calculations

### Transaction History

- Deposit: `+1000`
- Withdrawal: `-200`
- Transfer: `-500` from Chequing and `+500` to Savings

**Database:**

```typescript
type Transaction = {
		id: string;
		amount: number;
		accountId: string;
		type: string;
		timestamp: Date;
};
```

**Concepts learned:**

- Double-entry accounting
- Audit trails
- Banking ledger concepts

---

# Phase 2: Internal Transfers

Example: Chequing -> Savings

**Rules:**

- Cannot transfer a negative amount
- Cannot exceed the available balance

**Concepts learned:**

- Transaction rollback
- Data consistency

This is one of the most important banking concepts.

---

# Phase 3: API Security

## JWT

- Access token
- Refresh token

## Authorization

- Customer
- Admin
- Support

**Concepts learned:** RBAC and security best practices

---

# Phase 4: AWS Serverless

Create Lambda functions for:

### Notifications

- Send email
- Send SMS

### Statement Generation

- Generate a monthly PDF statement

### Fraud Detection

Simple rule: transactions over `$5000` create an alert.

**Concepts learned:**

- Event-driven architecture
- Serverless
- Asynchronous processing

---

# Phase 5: Digital Banking Dashboard

Angular screens:

## Login

- Username
- Password

## Accounts

- Chequing
- Savings
- Balances

## Transaction History

- Date
- Amount
- Type
- Description

## Transfers

- From
- To
- Amount

## Profile

- Personal information

**Concepts learned:**

- Angular routing
- Reactive forms
- Components
- State management

---

# Phase 6: Real Banking Concepts

## Interac-like Transfers

Send money to an email address.

**Workflow:**

```text
Sender
	|
	v
Generate token
	|
	v
Recipient accepts
	|
	v
Money deposited
```

## Bill Payments

- Hydro
- Internet
- Phone bill

**Concepts learned:**

- External integrations
- Payment processing

## Loan Calculator

Inputs:

- Principal
- Rate
- Term

Display:

- Monthly payment
- Total interest

**Concepts learned:** Financial calculations

---

# Phase 7: Bank Production Architecture

Split the backend into services:

- Auth Service
- Account Service
- Transaction Service
- Notification Service

**Structure:**

```text
backend/
	auth-service/
	account-service/
	transaction-service/
	notification-service/
```

Each service uses TypeScript, Node.js, and Express.

**Concepts learned:**

- Microservices
- Service boundaries
- API communication

---

# Database Design

Core entities:

### Users

```sql
users
```

### Accounts

```sql
accounts
```

### Transactions

```sql
transactions
```

### Beneficiaries

```sql
beneficiaries
```

### Transfers

```sql
transfers
```

This closely resembles the core entities used by many banking systems.

---

# AWS Services to Add Later

### API Gateway

Route APIs.

### Lambda

Serverless processing.

### SQS

Message queue.

### SNS

Notifications.

### CloudWatch

Monitoring.

### Secrets Manager

Secure secret storage.

These services will help demonstrate how enterprise banking applications are deployed.
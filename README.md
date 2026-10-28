# OnlineBanking

## Goal
Build a small learning project to understand how a digital banking platform works (inspired by apps like BMO), using:
- Angular
- Node.js + Express
- TypeScript
- AWS Lambda

## Suggested Project Scope (MVP)
Start with core banking flows:
1. User signup/login
2. View account summary (balance, account type)
3. View transaction history
4. Transfer money between own accounts
5. Pay a bill (mock payee list)

## Recommended Architecture
- **Frontend (Angular + TypeScript)**  
  - Pages: Login, Dashboard, Accounts, Transactions, Transfer, Bill Payment
  - Services: AuthService, AccountService, TransactionService
- **Backend API (Express + TypeScript)**  
  - REST endpoints for auth, accounts, transactions, transfers
  - Validation + centralized error handling
- **Cloud deployment (AWS Lambda)**  
  - Run Express API serverlessly (via API Gateway + Lambda)
  - Store data in DynamoDB (or start with a local/mock DB and migrate later)

## Step-by-Step Plan
1. **Plan domain model**
   - Users, Accounts, Transactions, Payees
2. **Create backend first**
   - TypeScript Express API with routes:
     - `POST /auth/login`
     - `GET /accounts`
     - `GET /accounts/:id/transactions`
     - `POST /transfers`
     - `POST /payments`
3. **Add Angular app**
   - Build pages and wire API calls
4. **Add auth/security basics**
   - JWT auth, route guards, input validation, rate limiting
5. **Deploy to AWS**
   - API Gateway + Lambda
   - Environment variables via AWS Systems Manager Parameter Store or Secrets Manager
6. **Add observability**
   - Structured logs, request IDs, CloudWatch dashboards
7. **Add tests**
   - Backend unit/integration tests
   - Angular component/service tests

## Suggested Folder Structure
```text
/frontend   -> Angular app
/backend    -> Express + TypeScript API
/infra      -> AWS deployment config (SAM/CDK/Terraform)
```

## Learning Milestones
- **Milestone 1:** Local full-stack app works end-to-end
- **Milestone 2:** Auth + transfer logic + validation
- **Milestone 3:** Deploy backend to Lambda and connect frontend
- **Milestone 4:** Improve reliability/security (logging, tests, error handling)

## Important Notes
- Keep this as a **simulation project** only (no real money, no real banking integrations).
- Use seeded/mock data first, then evolve toward cloud-managed data.
- Focus on transaction consistency and security practices as you scale.
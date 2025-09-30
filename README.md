

🕹️ CYBER WEB BACKEND

## Description
CYBER WEB BACKEND is the API for the Cyber Web project, responsible for managing products, categories, reviews, and other e-commerce features.

## Main Features
- CRUD for products, categories, and reviews
- Advanced filters by category, brand, price, and tags
- Pagination and sorting of results
- RESTful API ready for front-end integration

## Tech Stack
- **Node.js** – JavaScript runtime environment
- **TypeScript** – static typing and robustness
- **Express** – HTTP API framework
- **Prisma ORM** – database access and manipulation
- **SQLite** – local database for development

## Getting Started
Follow the steps below to run the project locally:

1. Clone the repository:
	```bash
	git clone https://github.com/lucashss88/cyber-web-backend.git
	cd cyber-web-backend
	```
2. Install dependencies:
	```bash
	npm install
	```
3. Configure Environment Variables:
  Create a copy of the .env.example file and rename it to .env:
	```bash
	  cp .env.example .env
	```
4. Set up the database:
	- The project is already configured for SQLite. If needed, adjust the `.env` file.
	- Run migrations:
	```bash
	npx prisma migrate dev
	```
5. Generate Prisma Client:
	```bash
	npx prisma generate
	```
6. Seed the database with sample data:
	```bash
	npx prisma db seed
	```
	Or alternatively:
	```bash
	npx tsx src/script/seed.ts
	```
7. Start the server:
	```bash
	npm run dev
	```
8. Access the API at `http://localhost:3001`

## Database Commands
Essential commands for database management:

### Generate Prisma Client
```bash
npx prisma generate
```
Generates the Prisma client based on your schema. Run this after schema changes.

### Run Database Migrations
```bash
npx prisma migrate dev
```
Creates and applies database migrations for development.

### Seed Database
```bash
npx prisma db seed
```
Populates the database with sample data defined in the seed file.

### Alternative Seed Command
```bash
npx tsx src/script/seed.ts
```
Directly executes the seed script using tsx.

### Open Prisma Studio
```bash
npx prisma studio
```
Opens a visual database browser at `http://localhost:5555`

### Reset Database
```bash
npx prisma migrate reset
```
Resets the database and re-runs all migrations and seeds.

## Swagger documentation

[localhost:3001/api-docs/](http://localhost:3001/api-docs/)



## Frontend & Backend

* **Backend:** [Cyber Web Backend](https://github.com/edgarneto12/cyber-web-backend.git)
* **Frontend:** [Cyber Web Frontend](https://github.com/edgarneto12/cyber-web-frontend.git)

## Authors
- [@edgarneto12](https://github.com/edgarneto12)


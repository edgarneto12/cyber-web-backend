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
3. Set up the database:
	- The project is already configured for SQLite. If needed, adjust the `.env` file.
	- Run migrations and seed:
	```bash
	npx prisma migrate dev
	npx ts-node prisma/seed.ts
	```
4. Start the server:
	```bash
	npm run dev
	```
5. Access the API at `http://localhost:3001`

## Front-end
The front-end for this project is available at:
[https://github.com/danielacvmelo/cyber-web-frontend.git](https://github.com/danielacvmelo/cyber-web-frontend.git)

## Authors
- [@lucashss88](https://github.com/lucashss88)
- [@danielacvmelo](https://github.com/danielacvmelo)
- [@edgarneto12](https://github.com/edgarneto12)
- [@VitorBeckenkamp](https://github.com/VitorBeckenkamp)
- [@Sandro-A-Moraes](https://github.com/Sandro-A-Moraes)

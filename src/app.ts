import express, { Application, Request, Response } from 'express';
import { categoriesRouter } from './routes/categories';

const app: Application = express();

app.use(express.json());

// Rota raiz
app.get('/', (req: Request, res: Response) => {
  res.send('API is running!');
});

// Rotas da API
app.use('/api/categories', categoriesRouter);

export default app;
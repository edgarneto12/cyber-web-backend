import express, { Application, Request, Response } from 'express';
import { categoriesRouter } from './routes/categories';
import productsRouter from './routes/products';
import brandsRouter from './routes/brands';

const app: Application = express();

app.use(express.json());

// Rota raiz
app.get('/', (req: Request, res: Response) => {
  res.send('API is running!');
});

// Rotas da API

app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/brands', brandsRouter);

export default app;
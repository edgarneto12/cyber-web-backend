import express, { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig';
import { categoriesRouter } from './routes/categories';
import productsRouter from './routes/products';
import brandsRouter from './routes/brands';
import reviewsRouter from './routes/reviews';
import cors from 'cors';


const app: Application = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API is running!');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/brands', brandsRouter);
app.use('/api/reviews', reviewsRouter);

export default app;
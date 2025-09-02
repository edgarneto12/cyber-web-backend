import { Router } from 'express';
import { CategoriesController } from '../controllers/categories/CategoriesController';

const router = Router();
const categoriesController = new CategoriesController();

/**
 * @swagger
 * /api/categories:
 * get:
 * summary: retorna a lista de nomes de todas as categorias
 * description: busca no banco de dados uma lista simples contendo apenas os nomes de todas as categorias de produtos disponíveis. É utilizado para popular a seção "Browse By Category" no frontend.
 * tags: [Categories]
 * responses:
 * 200:
 * description: uma lista de nomes de categorias.
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * data:
 * type: array
 * ‘items’:
 * type: ‘string’
 * example:
 * data: ["Cameras", "Computers", "Gaming", "Auscultadores", "Phones", "Smart Watches"]
 * 500:
 * description: erro interno do servidor.
 */
router.get('/', categoriesController.getAllCategories);

/**
 * @swagger
 * /api/categories/{id}:
 * get:
 * summary: Busca uma categoria específica pelo seu ID
 * description: Retorna os detalhes completos de uma única categoria com base no ID fornecido na URL.
 * tags: [Categories]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: O ID numérico da categoria a ser buscada.
 * schema:
 * type: integer
 * responses:
 * 200:
 * description: Detalhes da categoria encontrada.
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * data:
 * type: object
 * properties:
 * id:
 * type: integer
 * example: 1
 * name:
 * type: string
 * example: "Phones"
 * description:
 * type: string
 * example: "The latest and greatest smartphones."
 * 400:
 * description: O ID fornecido é inválido (não é um número).
 * 404:
 * description: Nenhuma categoria foi encontrada com o ID fornecido.
 * 500:
 * description: Erro interno do servidor.
 */
router.get('/:id', categoriesController.getCategoryById);

export { router as categoriesRouter };

import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'CyberWeb API',
    version: '1.0.0',
    description:
      'Documentação completa da API para o projeto de e-commerce CyberWeb, desenvolvida para a integração com o frontend.',
    contact: {
      name: 'Lucas Henrique | Edgar de Souza | Daniela Carvalho | Vitor Andre | Sandro Almeida',
      email: 'lucashss88@gmail.com',
    },
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 3001}`,
      description: 'Servidor de Desenvolvimento',
    },
  ],
  tags: [
    {
      name: 'Products',
      description: 'Operações relacionadas aos produtos.',
    },
    {
      name: 'Categories',
      description: 'Operações relacionadas às categorias de produtos.',
    },
    {
      name: 'Brands',
      description: 'Operações relacionadas às marcas dos produtos.',
    },
    {
      name: 'Reviews',
      description: 'Operações relacionadas às avaliações de produtos.',
    },
  ],
  components: {
    schemas: {
      ProductSummary: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          name: { type: 'string', example: 'Apple iPhone 15 Pro' },
          price: { type: 'number', format: 'float', example: 999.00 },
          url_image: { type: 'string', example: 'https://...' },
          tag: { type: 'string', example: 'new_arrival' },
        },
      },
      ProductDetail: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: { type: 'string' },
          description: { type: 'string' },
          brand: { type: 'string' },
          price: { type: 'number', format: 'float' },
          discounted_price: { type: 'number', format: 'float', nullable: true },
          stock: { type: 'integer' },
          url_image: { type: 'string' },
          tag: { type: 'string' },
          category: {
            type: 'object',
            properties: { id: { type: 'integer'}, name: { type: 'string'} }
          },
          smartphoneSpec: {
            type: 'object',
            nullable: true,
            properties: {
              screen_size: { type: 'string' },
              cpu: { type: 'string' },
              total_cores: { type: 'string' },
              main_camera: { type: 'string' },
              front_camera: { type: 'string' },
              battery: { type: 'string' },
            }
          },
          colors: { type: 'array', items: { type: 'object' } },
          storageOptions: { type: 'array', items: { type: 'object' } },
          reviews: { type: 'array', items: { type: 'object' } },
        },
      },
      Review: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name_user: { type: 'string' },
          url_image_user: { type: 'string' },
          message: { type: 'string' },
          rating: { type: 'integer' },
          created_at: { type: 'string', format: 'date-time' },
        },
      },
      ReviewSummary: {
        type: 'object',
        properties: {
          reviews: { type: 'integer' },
          excellent: { type: 'integer' },
          good: { type: 'integer' },
          average: { type: 'integer' },
          bellow_average: { type: 'integer' },
          poor: { type: 'integer' },
          media: { type: 'number', format: 'float' },
        },
      },
      PaginationMetadata: {
        type: 'object',
        properties: {
          total_pages: { type: 'integer', example: 12 },
          actual_page: { type: 'integer', example: 1 },
          total_items: { type: 'integer', example: 85 },
        },
      },
    },
  },
  paths: {
    '/api/categories': {
      get: {
        tags: ['Categories'],
        summary: 'Retorna a lista de nomes de todas as categorias',
        description: 'Busca no banco de dados uma lista simples contendo apenas os nomes de todas as categorias de produtos disponíveis. É utilizado para popular a seção "Browse By Category" no frontend.',
        responses: {
          '200': {
            description: 'Uma lista de nomes de categorias.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  },
                },
                example: {
                  data: ["Cameras", "Computers", "Gaming", "Headphones", "Phones", "Smart Watches"],
                },
              },
            },
          },
          '500': {
            description: 'Erro interno do servidor.',
          },
        },
      },
    },
    '/api/categories/{id}': {
      get: {
        tags: ['Categories'],
        summary: 'Busca uma categoria específica pelo seu ID',
        description: 'Retorna os detalhes completos de uma única categoria com base no ID fornecido na URL.',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            description: 'O ID numérico da categoria a ser buscada.',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Detalhes da categoria encontrada.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'object',
                      properties: {
                        id: { type: 'integer', example: 1 },
                        name: { type: 'string', example: 'Phones' },
                        description: { type: 'string', example: 'The latest and greatest smartphones.' },
                      },
                    },
                  },
                },
              },
            },
          },
          '400': { description: 'O ID fornecido é inválido (não é um número).' },
          '404': { description: 'Nenhuma categoria foi encontrada com o ID fornecido.' },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
    '/api/brands': {
      get: {
        tags: ['Brands'],
        summary: 'Lista todas as marcas e a contagem de produtos',
        description: 'Agrupa todos os produtos por marca e retorna uma lista de marcas com a contagem total de produtos para cada uma. Ideal para preencher o filtro de marcas no frontend.',
        responses: {
          '200': {
            description: 'Uma lista de objetos de marcas com a contagem total.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: { type: 'integer' },
                          brand: { type: 'string' },
                          total: { type: 'integer' },
                        },
                      },
                    },
                  },
                },
                example: {
                  data: [
                    { id: 1, brand: 'Apple', total: 5 },
                    { id: 2, brand: 'Samsung', total: 2 },
                  ],
                },
              },
            },
          },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
    '/api/products/tag/{tag_name}': {
      get: {
        tags: ['Products'],
        summary: 'Busca produtos por uma tag específica',
        description: 'Retorna uma lista de produtos que correspondem a uma tag específica (ex: new_arrival, bestseller, featured_product, discount_up_to_50).',
        parameters: [
          {
            in: 'path',
            name: 'tag_name',
            required: true,
            description: 'A tag pela qual filtrar os produtos.',
            schema: {
              type: 'string',
              enum: ['new_arrival', 'bestseller', 'featured_product', 'discount_up_to_50'],
            },
          },
        ],
        responses: {
          '200': {
            description: 'Uma lista de produtos correspondentes à tag.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/ProductSummary' },
                    },
                  },
                },
              },
            },
          },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
    '/api/products/category/{category_name}': {
      get: {
        tags: ['Products'],
        summary: 'Filtra produtos por categoria e marcas',
        description: 'Busca produtos de uma categoria específica, permitindo filtrar por marcas através do corpo da requisição. Suporta paginação e ordenação por query parameters.',
        parameters: [
          {
            in: 'path',
            name: 'category_name',
            required: true,
            description: 'O nome da categoria a ser buscada (ex: Phones).',
            schema: { type: 'string' },
          },
          {
            in: 'query',
            name: 'page',
            description: 'Número da página para paginação.',
            schema: { type: 'integer', default: 1 },
          },
          {
            in: 'query',
            name: 'sort',
            description: 'Campo pelo qual ordenar os produtos.',
            schema: { type: 'string', enum: ['price', 'name'], default: 'price' },
          },
          {
            in: 'query',
            name: 'order',
            description: 'Ordem da ordenação.',
            schema: { type: 'string', enum: ['asc', 'desc'], default: 'asc' },
          },
        ],
        requestBody: {
          description: 'Objeto opcional contendo filtros a serem aplicados.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  filters: {
                    type: 'object',
                    properties: {
                      brands: {
                        type: 'array',
                        items: { type: 'string' },
                        description: 'Uma lista de marcas para filtrar.',
                      },
                    },
                  },
                },
                example: {
                  filters: {
                    brands: ["Apple", "Samsung"],
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Uma lista paginada de produtos filtrados.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/ProductSummary' },
                    },
                    metadata: { $ref: '#/components/schemas/PaginationMetadata' },
                  },
                },
              },
            },
          },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
    '/api/products/{id}': {
      get: {
        tags: ['Products'],
        summary: 'Busca um produto específico pelo ID',
        description: 'Retorna todos os detalhes de um produto, incluindo suas especificações, cores, opções de armazenamento e avaliações.',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            description: 'O ID numérico do produto.',
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Detalhes completos do produto.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: { $ref: '#/components/schemas/ProductDetail' },
                  },
                },
              },
            },
          },
          '404': { description: 'Produto não encontrado.' },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
    '/api/products/reviews/{product_id}': {
      get: {
        tags: ['Products'],
        summary: 'Busca as avaliações de um produto',
        description: 'Retorna todas as avaliações de um produto específico, juntamente com um resumo das notas.',
        parameters: [
          {
            in: 'path',
            name: 'product_id',
            required: true,
            description: 'O ID numérico do produto.',
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Uma lista de avaliações e um resumo.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: { type: 'array', items: { $ref: '#/components/schemas/Review' } },
                    summary: { $ref: '#/components/schemas/ReviewSummary' },
                  },
                },
              },
            },
          },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
    '/api/products/related/{brand}': {
      get: {
        tags: ['Products'],
        summary: 'Busca produtos relacionados pela marca',
        description: 'Retorna uma lista de produtos da mesma marca, ideal para a seção "Related Products".',
        parameters: [
          {
            in: 'path',
            name: 'brand',
            required: true,
            description: 'O nome da marca para buscar produtos relacionados.',
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'Uma lista de produtos relacionados.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/ProductSummary' },
                    },
                  },
                },
              },
            },
          },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
    '/api/products': {
      get: {
        tags: ['Products'],
        summary: 'Busca todos os produtos com paginação e ordenação',
        description: 'Retorna uma lista paginada de todos os produtos, com opções de ordenação.',
        parameters: [
          { in: 'query', name: 'page', schema: { type: 'integer', default: 1 } },
          { in: 'query', name: 'sort', schema: { type: 'string', enum: ['price', 'name'], default: 'price' } },
          { in: 'query', name: 'order', schema: { type: 'string', enum: ['asc', 'desc'], default: 'asc' } },
        ],
        responses: {
          '200': {
            description: 'Uma lista paginada de produtos.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: { type: 'array', items: { $ref: '#/components/schemas/ProductSummary' } },
                    metadata: { $ref: '#/components/schemas/PaginationMetadata' },
                  },
                },
              },
            },
          },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
    '/api/reviews/summary/{product_id}': {
      get: {
        tags: ['Reviews'],
        summary: 'Busca o resumo das avaliações de um produto',
        description: 'Retorna apenas o resumo das avaliações de um produto (contagem total, média, etc.), sem a lista completa de mensagens.',
        parameters: [
          {
            in: 'path',
            name: 'product_id',
            required: true,
            description: 'O ID numérico do produto para buscar o resumo das avaliações.',
            schema: {
              type: 'integer',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Um objeto contendo o resumo das avaliações.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: { $ref: '#/components/schemas/ReviewSummary' },
                  },
                },
              },
            },
          },
          '400': { description: 'O ID do produto fornecido é inválido.' },
          '500': { description: 'Erro interno do servidor.' },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

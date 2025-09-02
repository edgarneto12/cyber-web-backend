import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

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
      url: 'http://localhost:3001',
      description: 'Servidor de Desenvolvimento',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, './routes/*.ts')],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

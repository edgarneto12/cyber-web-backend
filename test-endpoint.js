// teste endpoint /api/categories
// node test-endpoint.js

const http = require('http');

function testCategoriesEndpoint() {
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/categories',
    method: 'GET'
  };

  console.log('🧪 Testando endpoint: GET http://localhost:3001/api/categories\n');

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log(`📊 Status Code: ${res.statusCode}`);
      console.log('📋 Response:');
      
      try {
        const jsonData = JSON.parse(data);
        console.log(JSON.stringify(jsonData, null, 2));
        
        if (res.statusCode === 200 && jsonData.data) {
          console.log('\n✅ Endpoint funcionando corretamente!');
          console.log(`📈 Total de categorias: ${jsonData.data.length}`);
        } else {
          console.log('\n❌ Problema no endpoint');
        }
      } catch (error) {
        console.log('❌ Erro ao parsear JSON:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Erro na requisição:', error.message);
    console.log('\n💡 Certifique-se de que o servidor está rodando com: npm run dev');
  });

  req.end();
}

testCategoriesEndpoint();

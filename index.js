var request = require('request');

request('https://viacep.com.br/ws/13506743/json/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const cep = JSON.parse(body);

    console.log(cep);
});
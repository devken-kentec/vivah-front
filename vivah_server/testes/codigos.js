// SERVIDOR NATIVO DO NODEJS

/*const http = require('http');

let server = http.createServer((req, res)=>{

    console.log('URL:', req.url );
    console.log('METHOD: ', req.method);

    res.end('OK');

});

server.listen(3000, '127.0.0.1', ()=> {

    console.log('Servidor rodando!')
    
});*/

// SERVIDOR UTILIZANDO EXPRESS 
const express = require('express');
const conector = require('./Models/connect.js');

const Cad = require('./Models/cadastro')

let app = express();

  

app.get('/cadastro',(req, res, )=>{

    console.log('URL:', req.url );
    console.log('METHOD: ', req.method);

    res.end('OK, servidor com NODE.JS');

   // app.use(conector);

});

app.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor rodando!');
});


const  Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'devken', '@dev_ken130483', {
        host: "localhost",
        dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!");
}).catch(function(){
    console.log("Falha ao se conectar: "+error);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

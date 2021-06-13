require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/', routes);

server.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
});


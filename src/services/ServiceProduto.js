const db = require('../db');

module.exports = {

    buscarTodosProdutos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM produtos', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUmProdutos: (nome) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM produtos WHERE nome = ?', [nome], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar e retornar os produtos
                    aceito(results);
                }else {
                    aceito(false);
                }
            });
        });
    },

    inserirProduto: (nome, categoria, foto, preco)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO produtos (nome, categoria, foto, preco) VALUES (?, ?, ?, ?)',
                [nome, categoria, foto, preco],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertid); //insertId
                }
            );
        });
    },

    alterarProduto:(nome, categoria, foto, preco, id)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE produtos SET nome= ?, categoria= ?, foto= ?, preco= ? WHERE id= ? ',
            [nome, categoria, foto, preco, id],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
};



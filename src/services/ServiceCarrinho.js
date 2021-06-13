const db = require('../db');

module.exports = {

    buscarUmCarrinho: (user_id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM carrinhos WHERE user_id = ?', [user_id], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },

    inserirCarrinho: (user_id)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO carrinhos (email, senha, cep, rua, numero, bairro, cidade, estado, nome) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [email, senha, cep, rua, numero, bairro, cidade, estado, nome],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertid); //insertId
                }
            );
        });
    },

    alterarCarrinho:(email, senha, cep, rua, numero, bairro, cidade, estado, nome)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE carrinhos SET email= ?, senha= ?, cep= ?, rua= ?, numero= ?, bairro= ?, cidade= ?, estado= ?, nome= ? WHERE id= ? ',
            [email, senha, cep, rua, numero, bairro, cidade, estado, nome, id],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
};



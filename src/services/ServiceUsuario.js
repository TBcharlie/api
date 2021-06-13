const db = require('../db');

module.exports = {

    buscarTodosUsuarios: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM usuarios', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUmUsuario: (email) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM usuarios WHERE email = ?', [email], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ //vai verificar se retornou mais de 1 e pegar o 1
                    aceito(results[0]);
                }else {
                    aceito(false);
                }
            });
        });
    },

    inserirUsuario: (email, senha, cep, rua, numero, bairro, cidade, estado, nome)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO usuarios (email, senha, cep, rua, numero, bairro, cidade, estado, nome) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [email, senha, cep, rua, numero, bairro, cidade, estado, nome],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertid); //insertId
                }
            );
        });
    },

    alterarUsuario:(email, senha, cep, rua, numero, bairro, cidade, estado, nome)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE usuarios SET email= ?, senha= ?, cep= ?, rua= ?, numero= ?, bairro= ?, cidade= ?, estado= ?, nome= ? WHERE id= ? ',
            [email, senha, cep, rua, numero, bairro, cidade, estado, nome, id],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },
};



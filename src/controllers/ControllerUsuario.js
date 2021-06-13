const Service = require('../services/ServiceUsuario');

module.exports = {
    
    buscarTodosUsuarios: async (req, res) => {

        let usuarios = await Service.buscarTodosUsuarios();

        for(let i in usuarios){
            json.result.push({
                id: usuarios[i].id,
                email: usuarios[i].email,
                senha: usuarios[i].senha,
                cep: usuarios[i].cep,
                rua: usuarios[i].rua,
                numero: usuarios[i].numero,
                bairro: usuarios[i].bairro,
                cidade: usuarios[i].cidade,
                estado: usuarios[i].estado,
                nome: usuarios[i].nome
            });
        }

        res.json(json);
    },

    buscarUmUsuario: async (req, res) => {

        let email = req.params.email; //para pegar o parametro
        let usuario = await Service.buscarUmUsuario(email);

        if(usuario){
            json.result = usuario; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserirUsuario: async(req, res) => {

        let email = req.body.email;
        let senha = req.body.senha;
        let cep = req.body.cep;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let nome = req.body.nome;

        if (email && senha && cep && rua && numero && bairro && cidade && estado && nome){
            let idUsuario = await Service.inserirUsuario(email, senha, cep, rua, numero, bairro, cidade, estado, nome);
            json.result = {
                id: idUsuario,
                email,
                senha,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                nome
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterarUsuario: async(req, res) => {

        let id = req.params.id;
        let email = req.body.email;
        let senha = req.body.senha;
        let cep = req.body.cep;
        let rua = req.body.rua;
        let numero = req.body.numero;
        let bairro = req.body.bairro;
        let cidade = req.body.cidade;
        let estado = req.body.estado;
        let nome = req.body.nome;

        if (id && email && senha && cep && rua && numero && bairro && cidade && estado && nome){
            await Service.alterarUsuario(email, senha, cep, rua, numero, bairro, cidade, estado, nome, id);
            json.result = {
                id,
                email,
                senha,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                nome
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
}



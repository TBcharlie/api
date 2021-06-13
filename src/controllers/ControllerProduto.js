const Service = require('../services/ServiceProduto');

module.exports = {
    
    buscarTodosUsuarios: async (req, res) => {
        let json = {error:'', result:[]};

        let usuarios = await Service.buscarTodosUsuarios();

        for(let i in usuarios){
            json.result.push({
                id_cliente: usuarios[i].id_cliente,
                nome: usuarios[i].nome,
                email: usuarios[i].email,
                senha: usuarios[i].senha,
                cpf: usuarios[i].cpf,
                cidade: usuarios[i].cidade,
                bairro: usuarios[i].bairro,
                numero: usuarios[i].numero,
                uf: usuarios[i].uf,
                cep: usuarios[i].cep,
                data_nascimento: usuarios[i].data_nascimento,
                telefone: usuarios[i].telefone,
            });
        }

        res.json(json);
    },

    buscarUmUsuario: async (req, res) => {
        let json = {error:'', result:{}};

        let email = req.params.email; //para pegar o parametro
        let usuario = await Service.buscarUmUsuario(email);

        if(usuario){
            json.result = usuario; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserirUsuario: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let cpf = req.body.cpf;
        let cidade = req.body.cidade;
        let bairro = req.body.bairro;
        let numero = req.body.numero;
        let uf = req.body.uf;
        let cep = req.body.cep;
        let data_nascimento = req.body.data_nascimento;
        let telefone = req.body.telefone;

        if (nome && email && senha && cpf && cidade && bairro && numero && uf && cep && data_nascimento && telefone){
            let idUsuario = await Service.inserirUsuario(nome, email, senha, cpf, cidade, bairro, numero, uf, cep, data_nascimento, telefone);
            json.result = {
                id: idUsuario,
                nome,
                email,
                senha,
                cpf,
                cidade,
                bairro,
                numero,
                uf,
                cep,
                data_nascimento,
                telefone
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterarUsuario: async(req, res) => {
        let json = {error:'', result:{}};

        let id_cliente = req.params.id_cliente;
        let nome = req.query.nome;
        let email = req.query.email;
        let senha = req.query.senha;
        let cpf = req.query.cpf;
        let cidade = req.query.cidade;
        let bairro = req.query.bairro;
        let numero = req.query.numero;
        let uf = req.query.uf;
        let cep = req.query.cep;
        let data_nascimento = req.query.data_nascimento;
        let telefone = req.query.telefone;

        if (id_cliente && nome && email && senha && cpf && cidade && bairro && numero && uf && cep && data_nascimento && telefone){
            await Service.alterarUsuario(nome, email, senha, cpf, cidade, bairro, numero, uf, cep, data_nascimento, telefone, id_cliente);
            json.result = {
                id_cliente,
                nome,
                email,
                senha,
                cpf,
                cidade,
                bairro,
                numero,
                uf,
                cep,
                data_nascimento,
                telefone
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
}



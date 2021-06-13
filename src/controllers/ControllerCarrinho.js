const Service = require('../services/ServiceCarrinho');

module.exports = {
    
    buscarUmCarrinho: async (req, res) => {
        let json = {error:'', result:{}};

        let user_id = req.params.user_id; //para pegar o parametro
        let usuario = await Service.buscarUmCarrinho(user_id);

        if(usuario){
            json.result = usuario; //se tiver nota ele joga no json
        }

        res.json(json);
    },

    inserirCarrinho: async(req, res) => {
        let json = {error:'', result:{}};

        let user_id = req.body.user_id;
        let produtos = req.body.produtos;

        if (user_id && produtos){
            let idUsuario = await Service.inserirCarrinho(user_id, produtos);
            json.result = {
                user_id,
                produtos
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterarCarrinho: async(req, res) => {
        let json = {error:'', result:{}};

        let user_id = req.params.user_id;
        let produtos = req.body.produtos;

        if (user_id && produtos){
            await Service.alterarCarrinho(produtos, user_id);
            json.result = {
                user_id,
                produtos
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
}



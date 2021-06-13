const Service = require('../services/ServicePedido');

module.exports = {

    inserirPedido: async(req, res) => {
        let json = {error:'', result:{}};

        let comprador = req.query.comprador;
        let email = req.query.email;
        let compra = req.query.compra;
        let endereco = req.query.endereco;

        if (comprador && email && compra && endereco){
            let idUsuario = await Service.inserirPedido(comprador, email, compra, endereco);
            json.result = {
                comprador,
                email,
                id: idUsuario,
                compra,
                endereco
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }
}



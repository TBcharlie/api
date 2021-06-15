const express = require('express');
const router = express.Router();

const ControllerUsuario = require('./controllers/ControllerUsuario');
router.get('/usuarios', ControllerUsuario.buscarTodosUsuarios);//buscar todos usuarios
router.get('/usuario/:email/:senha', ControllerUsuario.buscarUmUsuario);//buscar usuario pelo email
router.post('/usuario', ControllerUsuario.inserirUsuario);//inserir usuario na base de dados
router.put('/usuario/:id', ControllerUsuario.alterarUsuario);//alterar dados do usuario

const ControllerCarrinho = require('./controllers/ControllerCarrinho');
router.get('/carrinho/:user_id', ControllerCarrinho.buscarUmCarrinho);//buscar carrinho pelo id do usuario
router.post('/carrinho', ControllerCarrinho.inserirCarrinho);//inserir carrinho do usuário na base de dados
router.put('/carrinho/:user_id', ControllerCarrinho.alterarCarrinho);//alterar dados do carrinho

const ControllerPedido = require('./controllers/ControllerPedido');
router.post('/pedido',function(req,res){
  console.dir(req.body);
  res.send("fechou aqui");
});//inserir carrinho do usuário na base de dados

module.exports = router;


create table usuarios(
    id int PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) UNIQUE KEY,
    senha varchar(50),
    cep varchar(8),
    rua varchar(70),
    numero varchar(10),
    bairro varchar(75),
    cidade varchar(50),
    estado varchar(2),
    nome varchar(255)
);

create table produtos(
    id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255),
    categoria varchar(10),
    foto varchar(1000), 
    preco varchar(5)
);

create table carrinhos(
    user_id varchar(255),
    produtos text
);

create table pedidos(
    comprador varchar(255),
    email varchar(255),
    id int PRIMARY KEY AUTO_INCREMENT,
    compra text,
    endereco text
)
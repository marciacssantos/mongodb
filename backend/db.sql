
drop database if exists fseletro;
create database if not exists fseletro;


use fseletro;
create table produtos(
    id          int             auto_increment,
    categoria   varchar(100),
    descricao   varchar(500),
    preco       decimal(7,2),
    preco_venda decimal(7,2),
    imagem      varchar(100),

    primary key (id)
);
insert into produtos (categoria, descricao, preco, preco_venda, imagem)
values
      ("geladeira", "Geladeira Frost Free Brastemp Side Inverse 540 litros", 6839.00, 5019.00, "geladeira1.jpg")
    , ("geladeira", "Geladeira Frost Free Brastemp Branca Inverse 375 litros", 2068.60, 1910.90, "geladeira2.jpg")
    ,	("geladeira", "Geladeira Frost Free Consul Prata 340 litros", 2199.00, 2069.00, "geladeira3.jpg")
    ,	("fogao", "Fogao 4 bocas Consul Inox com mesa de vidro", 1200.00, 1129.00, "fogao1.jpg")
	  ,	("fogao", "Fogao de piso 4 bocas Atlas Monaco com ascendimento automatico", 609.00, 519.70, "fogao2.jpg")
    ,	("microondas", "Microondas Consul 32L Inox 220V", 580.00, 409.88, "microondas1.jpg")
	  ,	("microondas", "Microondas 25L Espelhado Philco 220V", 508.70, 464.53, "microondas2.jpg")
    , ("microondas", "Microondas Eletrolux 20L Branco", 459.00, 436.05, "microondas3.jpg")
	  , ("lavaLouca", "Lava-louca Eletrolux Inox com 10 sericos, 06 Programas de Lavagem e painel Blue Touch", 3599.00, 2799.90, "lavalouca1.jpg")
    , ("lavaLouca", "Lava_louca Compacta 8 servicos branca 127V Brastemp Side Inverse 540 Litros", 1970.50, 1730.61, "lavalouca2.jpg")
    , ("lavaRoupa", "Lavadora de Roupa Brastemp 11kg com Turbo Performance Branca", 1600, 1214.10, "lavadora1.jpg")
    , ("lavaRoupa", "Lavadora de Roupa Philco 12kg", 2390.00, 2179.90, "lavadora2.jpg");



create table `preco`
(
		  id	  	INT		AUTO_INCREMENT
    ,	valor		FLOAT
    
    ,   PRIMARY KEY(ID)
);

INSERT INTO preco
(valor)
VALUES
		(1500.00)
    ,	(6080.00)
    ,	(3417.90)
   	,	(2615.00)
    ,	(829.00)
    ,	(714.80)
    ,	(956.00)
    ,	(1050.90)
    ,	(1995.90)
    ,	(999.80)
    ,	(695.14)
    ,	(1512.00)
    ,	(1900.80)
    ,	(795.90)
    ,	(870.00);


CREATE TABLE celular
(
    	id		  INT 			AUTO_INCREMENT
  	,	modelo	VARCHAR(30)
	  ,	valor	  INT
    ,	imagem	VARCHAR(100)
    
    ,	PRIMARY KEY(id)
    ,	FOREIGN KEY(valor)	REFERENCES preco(id)
    
);

INSERT INTO celular
(modelo, valor, imagem)
VALUES
		('iphone 12', 2, 'iphone.png')
    ,	('Samsung galaxy A71', 4, 'samsung.jpg' )
    ,	('LG Velvet', 9, 'lg.jpg')
    ,	('Motorola G7', 14, 'motorola.png')
    ,	('LG K61', 12, 'lg5.jpg')
    ,	('Asus Zenfone Max Shot', 5, 'asus.jpg')
    ,	('Multilaser G Pro', 10, 'multilaser.jpg')
    ,	('Samsung Galaxy M31', 1, 'samsung3.jpg')
    ,	('LG K22', 15, 'lg4.jpg')
    ,	('LG G8x', 13, 'lg2.jpg')
    ,	('Motorola Razr', 3, 'motorola2.jpg')
    ,	('Xiaomi Redmi Note 8', 8, 'xiaomi.jpg')
    ,	('Samsung a01',6, 'samsung3.jpg')
    ,	('LG K8', 11, 'lg3.jpg')
    ,	('Motorola G8', 7, 'motorola3.jpg');
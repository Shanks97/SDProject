
create table Usuario(
usuID numeric(18,0) identity(1,1) not null,
nombre varchar(100),
apellido varchar(100)
CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED
)


insert into [dbo].[Usuario] values 
('Juan', 'Cortes'),
('Nicolas', 'Valer'),
('Gabriel', 'Arias'),
('Cristian', 'Salas'),
('Alejandra', 'Mora')

select * from [dbo].[Usuario]

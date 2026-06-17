create table if not exists users (
    id serial primary key,
    numero_control varchar(9) not null unique,
    nombre varchar(100) not null,
    email varchar(150) not null unique,
    password_hash text not null,
    created_at timestamp default current_timestamp
);
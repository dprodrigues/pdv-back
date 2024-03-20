SET timezone = 'America/Sao_Paulo';
CREATE SCHEMA IF NOT EXISTS pdv;

CREATE TABLE users
(
    id              SERIAL PRIMARY KEY,
    email           VARCHAR NOT NULL,
    password        VARCHAR NOT NULL
);

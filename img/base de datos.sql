create database
gestion_biblioteca;

USE gestion_biblioteca;

CREATE TABLE "Users" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    document_number VARCHAR(255) NOT NULL UNIQUE,
    address VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

CREATE TABLE "Books" (
    id SERIAL PRIMARY KEY,
    isbn VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publication_year INTEGER
);

CREATE TABLE "Platforms" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE "Loans" (
    id SERIAL PRIMARY KEY,
    loan_date TIMESTAMP WITH TIME ZONE NOT NULL,
    loan_days INTEGER,
    status VARCHAR(255),
    type VARCHAR(255),
    return_date TIMESTAMP WITH TIME ZONE,
    late_fee INTEGER,
    paid_fee INTEGER,
    "UserId" INTEGER REFERENCES "Users" (id) ON DELETE SET NULL ON UPDATE CASCADE,
    "BookId" INTEGER REFERENCES "Books" (id) ON DELETE SET NULL ON UPDATE CASCADE,
    "PlatformId" INTEGER REFERENCES "Platforms" (id) ON DELETE SET NULL ON UPDATE CASCADE
);

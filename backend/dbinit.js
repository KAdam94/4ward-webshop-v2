import sqlite3 from "sqlite3";

sqlite3.verbose();

const db = new sqlite3.Database("./database.db", err => {
    if(err){
        console.log("Error occured while creating the database!");
        console.error(err);
    } else {
        console.log("Database was successfully created.");
    }
});

db.serialize(() => {
    db.run("PRAGMA foreign_keys = ON");

    db.run("CREATE TABLE IF NOT EXISTS categories (categoryID INTEGER PRIMARY KEY, name varchar(50), amount INTEGER)", (err) => {
        if (err) {
            console.log("Error occured while creating the categories table.");
            console.error(err);
        } else {
            console.log("Categories table was succesfully created.")
        }
    });

    db.run("CREATE TABLE IF NOT EXISTS products (productID INTEGER PRIMARY KEY, brand varchar(50), type varchar(50), year INTEGER, seats INTEGER, price FLOAT, categoryID INTEGER, FOREIGN KEY(categoryID) REFERENCES categories(categoryID) )", (err) => {
        if (err) {
            console.log("Error occured while creating the products table.");
            console.error(err);
        } else {
            console.log("Products table was succesfully created.")
        }
    })

    db.close( err => {
        if(err){
            console.log("An error occured while closing the database.");
            console.error(err);
        } else {
            console.log("The database was successfully closed.");
        }
    })

});

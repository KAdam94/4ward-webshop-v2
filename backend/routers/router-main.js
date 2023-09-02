import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.db", (err) =>{
    if(err){
        console.log("Error occured while connecting to the database.");
        console.error(err);
    } else {
        console.log("Connection successfully established.");
    }
})

const server = express();
server.use(cors());

server.listen(8080, err => {
    if(err){
        console.log("Error occured while establishing connection with server.")
    } else {
        db.run("PRAGMA foreign_keys = ON")
        console.log("Server is now listening on PORT 8080");
    }
})


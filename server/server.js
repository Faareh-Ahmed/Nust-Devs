import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import mysql from "mysql"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser);


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"userAccounts"
});


app.listen(8000, ()=>{
    console.log("Running ...");
});
const { query } = require("express");
const { json } = require("sequelize")
const uuid = require("uuid")
const path = require('path');
const multer = require('multer');

const AplicationErrors = require("../Errors/AplicationErrors");
const { conn } = require("../Dbase/dbconnect");

const express = require('express')
const app = express();


class AddInformationLogic
{
    async registrationUser(req, res)
    {
        const query = req.body
        res.json({
            login: query.login, 
            password: query.password,
            Fname: query.Fname, 
            Sname: query.Sname,
            Tname: query.Tname, 
            TypeUser: query.TypeUser,
        });


        var sql = "INSERT INTO User(FName, TName, SName, Type, Login, Password) VALUES (?,?,?,?,?,?);";
        
        conn.query(sql, [query.Fname,query.Tname,query.Sname,query.TypeUser,query.login,query.password], (err, result) => {
            if(err)
            {
                console.log(err)
            }
            else
            {
                console.log("okk")
            }
        });
    }

    
      

    async Galery(req, res)
    {
        
    }
}


module.exports = new AddInformationLogic()
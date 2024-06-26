const { query } = require("express");
const { json } = require("sequelize")

const AplicationErrors = require("../Errors/AplicationErrors");
const { conn } = require("../Dbase/dbconnect");

class UserLogic
{
    async Login(req, res)
    {
        const query = req.body

        var sql = "Select * from user where `Login` = ? and `Password` = ?;";
        
        conn.query(sql, [query.login,query.password], (err, result) => {
            
            if(err)
            {
                console.log(err)
            }
            else
            {
                if(query.login == "" || query.password == "")
                {
                    res.json({
                        err: "Заплните все поля перед авторизацией"
                    });
                }
                else
                {
                    if(result == "")
                    {
                        res.json({
                            err: "Неверный логин или пароль"
                        });
                    }
                    else
                    {
                        res.json({
                            err: "",
                            login: result[0]['id'],
                            typeuser: result[0]['Type']
                        });
                    }
                }
                console.log(result)
            }
        });
    }

    async ViewProfile(req, res)
    {
        const query = req.body

        var sql = "Select * from user where `id` = ?;";
        
        conn.query(sql, [query.id], (err, result) => {
            
            if(err)
            {
                console.log(err)
            }
            else
            {
                res.send(result);

                console.log(result)
            }
        });

        console.log(query.id)
    }
}

module.exports = new UserLogic()
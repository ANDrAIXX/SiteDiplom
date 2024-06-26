const AplicationErrors = require('../Errors/AplicationErrors')

module.exports = function(err, req, res, next)
{
    if(err instanceof AplicationErrors)
    {
        return res.status(err.status).json({message: err.message})
    }

    return res.status(500).json({message: "Неопознанная ошибка!"})
}
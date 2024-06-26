const Route = require('express')
const AddInfLogic = require('../Logic/AddInfLogic')
const UserLogic = require('../Logic/UserLogic')
const route = new Route()



route.post('/register', AddInfLogic.registrationUser)
route.post('/login', UserLogic.Login)
route.post('/profile', UserLogic.ViewProfile)
route.post('/galery', AddInfLogic.Galery)

module.exports = route
const Route = require('express')
const route = new Route()

const UserLogic = require('../Logic/UserLogic')

route.post('/register', UserLogic.registrationUser)
route.post('/login', UserLogic.Login)

module.exports = route
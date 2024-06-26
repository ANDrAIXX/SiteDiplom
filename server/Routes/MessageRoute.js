const Route = require('express')
const route = new Route()

const MessageLogic = require('../Logic/MessageLogic')

route.post('/mess', MessageLogic.enterMessage)
route.get('/mess/:id', MessageLogic.viewListMessage)
route.get('/listmessage/:id', MessageLogic.viewMessage)

module.exports = route
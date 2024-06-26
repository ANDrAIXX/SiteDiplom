const Route = require('express')
const route = new Route()

const ListLogic = require('../Logic/ListLogic')

route.get('/teacher', ListLogic.viewTeacher)
route.get('/student/:id', ListLogic.viewStudent)
route.post('/parents/:id', ListLogic.viewParents)

module.exports = route
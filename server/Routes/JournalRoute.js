const Route = require('express')
const route = new Route()

const JournalLogic = require('../Logic/JournalLogic')

route.post('/dnevnick', JournalLogic.addMarck)
route.get('/dnevnick/:id', JournalLogic.viewDnevnick)
route.post('/documentation', JournalLogic.addDoc)
route.get('/documentation/:id', JournalLogic.viewDoc)
route.post('/homework', JournalLogic.addHomework)
route.get('/homework/:id', JournalLogic.viewHomework)

module.exports = route
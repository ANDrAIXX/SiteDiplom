const Route = require('express')

const route = new Route()

const AddInfRoute = require('./AddInfRoute')
const JournalRoute = require('./JournalRoute')
const NewsRoute = require('./NewsRoute')
const MessageRoute = require('./MessageRoute')
const ListRoute = require('./ListRoute')

route.use('/user', AddInfRoute)
route.use('/journal', JournalRoute)
route.use('/list', ListRoute)
route.use('/message', MessageRoute)
route.use('/news', NewsRoute)

module.exports = route
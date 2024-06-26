const Route = require('express')
const route = new Route()

const NewsLogic = require('../Logic/NewsLogic')

route.post('/news', NewsLogic.addNews)
route.get('/news', NewsLogic.viewNews)

module.exports = route
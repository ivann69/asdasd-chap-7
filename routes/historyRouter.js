const historyRouter = require('express').Router()

const { HistoryController } = require('../controllers/historyController')
const authentication = require('../middleware/authentication')
const authorisasiHistory = require('../middleware/authorisasiHistory')

historyRouter.use(authentication)
historyRouter.get("/", HistoryController.getHistory)
historyRouter.get("/:id", authorisasiHistory, HistoryController.getHistoryById)


module.exports = historyRouter
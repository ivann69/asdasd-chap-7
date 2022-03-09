const historyRouter = require('express').Router()

const { HistoryController } = require('../controllers/historyController')
const authentication = require('../middleware/authentication')
const authorisasiHistory = require('../middleware/authorisasiHistory')

// historyRouter.use(authentication)
// historyRouter.get("/", HistoryController.getHistory)
// historyRouter.get("/:id", authorisasiHistory, HistoryController.getHistoryById)

historyRouter.get("/", HistoryController.viewAll)
historyRouter.get("/add", HistoryController.getAddForm)
historyRouter.post("/add", HistoryController.addHistory)
historyRouter.get("/:id/delete", HistoryController.deletehistory)
historyRouter.get("/:id/edit", HistoryController.getEditForm)
historyRouter.post("/:id/edit", HistoryController.edithistory)
historyRouter.get("/:id", HistoryController.viewById)
historyRouter.get("/cari/:menang", HistoryController.viewByMenang)

module.exports = historyRouter
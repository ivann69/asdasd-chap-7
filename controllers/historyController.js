const { UserHistory } = require('../models')

class HistoryController {
  static getHistory = async (req, res, next) => {
    // ambil userid dari cookies
    const { UserId } = req.cookies

    // ambil dari req.user yang diselipin dari authentikasi
    const userIdDariReqUser = req.user.id

    try {
      const userHistory = await UserHistory.findOne({
        where: {
          UserId: userIdDariReqUser
        }
      })
      res.status(200).json({ userHistory })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static getHistoryById = async (req, res, next) => {
    try {
      const userHistory = await UserHistory.findByPk({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({ userHistory })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = { HistoryController }
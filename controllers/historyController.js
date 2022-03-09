const { UserHistory } = require('../models')

class HistoryController {
    static viewAll(req, res) {
      UserHistory.findAll({
        order: [["id", 'ASC']]
      })
        .then((data) => {
          res.render("history", { data })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    static viewById(req, res) {
      const id = req.params.id
      UserHistory.findByPk(id)
        .then((data) => {
          // karena di ejs untuk menampilkan datanya data wajib berupa array, karena nampilin datanya itu prosesnya nge loop data, maka dari itu datanya dibuat menjadi arrray
          data = [data]
          res.render("history", { data })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    static viewByMenang(req, res) {
      const menang = req.params.menang
      UserHistory.findOne({
        where: { menang: menang }
      })
        .then((data) => {
          data = [data]
          res.render("history", { data })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    static getAddForm(req, res) {
      res.render("history/add")
    }
  
    static addHistory(req, res) {
      // bikin penampung object buat input data ke db
      let newhistory = {
        win: req.body.win,
        lose: req.body.lose,
        draw: req.body.draw,
      }
  
      UserHistory.create(newhistory)
        .then((_) => {
          res.redirect("/history")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  
    static getEditForm(req, res) {
      const id = req.params.id
      UserHistory.findByPk(id)
        .then((data) => {
          console.log(data)
          res.render('history/edit', { data })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  
    static edithistory(req, res) {
      const id = req.params.id
      let updatedhistory = {
        win: req.body.win,
        lose: req.body.lose,
        draw: req.body.draw,
      }
      UserHistory.update(updatedhistory, {
        where: {
          id: id
        }
      })
        .then(() => {
          res.redirect("/history")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  
    static deletehistory(req, res) {
      const id = req.params.id
      UserHistory.destroy({
        where: { id: id }
      })
        .then(() => {
          res.redirect("/history")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  
  module.exports = { HistoryController }
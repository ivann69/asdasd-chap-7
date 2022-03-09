const afterLogin = require("express").Router()

afterLogin.get("/", (req, res) => {
    res.redirect("afterLogin.ejs")
})

module.exports = afterLogin
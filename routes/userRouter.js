const userRouter = require('express').Router()

userRouter.get("/", (req, res) => {
  res.send("index.ejs")
})

module.exports = userRouter
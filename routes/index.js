const authRouter = require('./authRouter')
const biodataRouter = require('./biodataRouter')
const userRouter = require('./userRouter')
const historyRouter = require('./historyRouter')
const afterLogin = require('./afterLogin')

const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home.ejs")
  })

router.use('/auth', authRouter)
router.use("/biodata", biodataRouter)
router.use("/user", userRouter)
router.use("/history", historyRouter)
router.use('/afterLogin', afterLogin)
module.exports = router
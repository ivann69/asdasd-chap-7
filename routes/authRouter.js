const { Validator } = require('express-json-validator-middleware')
const AuthController = require('../controllers/authController')
const { registerSchema } = require('../validationSchema/authSchema.express')
const { validate } = new Validator()
const { validatorHandler } = require("../middleware/validatorJoi")
const { registerUserSchema, loginUserSchema } = require('../validationSchema/authSchema.joi')
const { application_name } = require('pg/lib/defaults')
const authRouter = require('express').Router()

authRouter.post("/registerExpress", validate({ body: registerSchema }), AuthController.register)

authRouter.post("/registerJoi", validatorHandler(registerUserSchema, "body"), AuthController.register)

authRouter.get("/registerJoi", (req, res) => {
    res.render("user/register.ejs")
  })

authRouter.post("/login", validatorHandler(loginUserSchema, "body"), AuthController.login)

authRouter.get("/login", (req, res) => {
    res.render("user/index.ejs")
  })

authRouter.get("/afterLogin", (req, res) =>{
    res.render("user/afterLogin.ejs")
})


  
module.exports = authRouter
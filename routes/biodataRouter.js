const { BiodataController } = require('../controllers/biodataController')
const authentication = require('../middleware/authentication')
const authorisasiBiodata = require('../middleware/authorisasiBiodata')
const biodataRouter = require('express').Router()


/**
 * proses authentikasi yang terjadi
 * 1. dari login, login controller akan generate cookies dan diselipin di browser
 * 2. di biodataRouter.get("/"), ketika user akses ("/") dia akan masuk ke middleware authentikasi terlebih dahulu
 */
// biodataRouter.use(authentication)
// biodataRouter.get("/", BiodataController.viewAll)
// biodataRouter.get("/:id", authorisasiBiodata, BiodataController.getBiodataById)
// biodataRouter.get("/add" , authorisasiBiodata, BiodataController.getBiodataById)
// biodataRouter.post("/add",BiodataController.getBiodataById)
// biodataRouter.get("/:id", BiodataController.viewById)

biodataRouter.get("/", BiodataController.viewAll)
biodataRouter.get("/add" ,BiodataController.getAddForm)
biodataRouter.post("/add",BiodataController.addbiodata)
biodataRouter.get("/:id/delete", BiodataController.deleteBiodata)
biodataRouter.get("/:id/edit", BiodataController.getEditForm)
biodataRouter.post("/:id/edit", BiodataController.editBiodata)
biodataRouter.get("/:id", authorisasiBiodata ,BiodataController.viewById)
biodataRouter.get("/cari/:email", BiodataController.viewByEmail)




module.exports = biodataRouter 
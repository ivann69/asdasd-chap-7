const { UserBiodata } = require('../models')

class BiodataController {
  static getBiodata = async (req, res, next) => {
    // ambil userid dari cookies
    const { UserId } = req.cookies

    // ambil dari req.user yang diselipin dari authentikasi
    const userIdDariReqUser = req.user.id

    

    try {
      const userBiodata = await UserBiodata.findOne({
        where: {
          UserId: userIdDariReqUser
        }
      })
     // res.status(200).json({ userBiodata })
     res.render("biodata", { userBiodata })
    } catch (error) {
      res.status(500).json(error)
      
      //return res.redirect("/biodata")
    }
  }

  static getBiodataById = async (req, res, next) => {
    try {
      const userBiodata = await UserBiodata.findByPk({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({ userBiodata })
      res.render("biodata", { userBiodata})
      //return res.redirect("/biodata")

    } catch (error) {
      res.status(500).json(error)
    }
    
  }
  // static getAddForm(req, res) {
  //   res.render("biodata/add")
  // }

  // static addbiodata(req, res) {
  //   // bikin penampung object buat input data ke db
  //   let newBiodata = {
  //     name: req.body.name,
  //     gender: req.body.gender,
  //     dob: req.body.dob,
  //     status: req.body.status,
  //   }

  //   Biodata.create(newBiodata)
  //     .then((_) => {
  //       res.redirect("/biodata")
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  
  
  // static addbiodata(req, res) {
  //   // bikin penampung object buat input data ke db
  //   let newBiodata = {
  //     first_name: req.body.first_name,
  //     last_name: req.body.last_name,
  //     gender: req.body.gender,
  //     birthday: req.body.birthday,
  //     email: req.body.email,
  //   }
  // }
  
  
}

module.exports = { BiodataController }
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
      res.status(200).json({ userBiodata })
    } catch (error) {
      res.status(500).json(error)
    }
  }
  

  static viewAll(req, res) {
    UserBiodata.findAll({
      order: [["id", 'ASC']]
    })
      .then((data) => {
        res.render("biodata", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewById(req, res) {
    const id = req.params.id
    UserBiodata.findByPk(id)
      .then((data) => {
       
        data = [data]
        res.render("biodata", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static viewByEmail(req, res) {
    const email = req.params.email
    UserBiodata.findOne({
      where: { email: email }
    })
      .then((data) => {
        data = [data]
        res.render("biodata", { data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  static getAddForm(req, res) {
    res.render("biodata/add")
  }

  static addbiodata(req, res) {
    
    // bikin penampung object buat input data ke db
    let newBiodata = {
      name: req.body.name,
      gender: req.body.gender,
      dob: req.body.dob,
      status: req.body.status,
    }

    UserBiodata.create(newBiodata)
      .then((_) => {
        res.redirect("/biodata")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static getEditForm(req, res) {
    const id = req.params.id
    UserBiodata.findByPk(id)
      .then((data) => {
        console.log(data)
        res.render('biodata/edit', { data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static editBiodata(req, res) {
    const id = req.params.id
    let updatedbiodata = {
      name: req.body.name,
      gender: req.body.gender,
      dob: req.body.dob,
      status: req.body.status,
    }
    UserBiodata.update(updatedbiodata, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/biodata")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  static deleteBiodata(req, res) {
    const id = req.params.id
    UserBiodata.destroy({
      where: { id: id }
    })
      .then(() => {
        res.redirect("/biodata")
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

  module.exports = { BiodataController }

// class BiodataController {
//   static getBiodata = async (req, res, next) => {
//     // ambil userid dari cookies
//     const { UserId } = req.cookies

//     // ambil dari req.user yang diselipin dari authentikasi
//     const userIdDariReqUser = req.user.id

//     try {
//       const userBiodata = await UserBiodata.findOne({
//         where: {
//           UserId: userIdDariReqUser
//         }
//       })
//       res.status(200).json({ userBiodata })
//     } catch (error) {
//       res.status(500).json(error)
//     }
//   }

//   static getBiodataById = async (req, res, next) => {
//     try {
//       const userBiodata = await UserBiodata.findByPk({
//         where: {
//           id: req.params.id
//         }
//       })
//       res.status(200).json({ userBiodata })
//     } catch (error) {
//       res.status(500).json(error)
//     }
//   }
//   static viewAll = async (req, res, next) => {
//         try { 
//           const userBiodata = await UserBiodata.findByPk({
//             where: {
//               id: req.params.id
//             }
//           })
//           res.status(200).json({ userBiodata })
//       }
//           catch(error) {
//             res.status(500).json(error)
//           }
// }
// }


// module.exports = { BiodataController }
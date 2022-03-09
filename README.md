# Chapter 7 Terakhir

Pengerjaan Challenge chapter 7 in a nutshell

1. Untuk mengerjakan tugas chapter 7 ini, yang kamu perlukan adalah, membaca si Requirements yang ada di sini: https://drive.google.com/drive/u/1/folders/1PDpyfIQOSNo5tbe9I6MdW6c9BWnr87Gd

2. bikin repository di github namanya bebas kalau bisa chapter-7-nama
   a. udah include sama README.md dan .gitignore

3. git clone repository yang udah dibuat tadi

4. `git checkout -b namaLu`

5. kerjainnya di branch yang di checkout tadi

6. karena sudah memahami requirementsnya, disini kita lanjut untuk mengerjakan

7. `npm init -y`

8. install package yang akan kamu pakai `npm i ...`
   a. express -> server engine
   b. pg -> database yang dipake postgres
   c. bcrypt -> hash password
   d. cors -> dipake buat sharing data antara FE sama BE , kalau udah FE BE ini penting. wajib.
   e. cookie-parser -> parse cookie
   f. joi / express-json-validator-middleware -> validasi
   g. sequelize -> buat bantu query ke database
   h. ejs -> view engine
   i. dotenv -> buat merahasiakan si rahasia

9. dev-dependency -> buat dipake di development doang
   a. sequelize-cli -> buat bantu generate si sequelize config (model config seeder migrations)

10. `npx sequelize init`

11. edit config di `config/config.json` kalau pake dotenv `config/config.js`

12. jalankan command buat initialize si db `npx sequelize db:create`

13. generate si Model
    a. model User
    i. username
    ii. email
    iii. password
    iv. role -> "superadmin" dan "player"

    b. model UserBiodata
    terserah, tapi kalau bisa pake relasi 1 to 1
    i. UserId -> UserBiodata.belongsTo(model.User)

    c. model UserHistory
    i. UserId -> UserHistory.belongsTo(model.User)
    ii. win
    iii. lose
    iv. draw

14. rapihin model dan juga si relasinya

15. `npx sequelize db:migrate` kalau nanti ada perubahan lagi di step sebelumnya, jalanin ulang di `npx sequelize db:migrate:undo:all` terus migrate lagi

16. initialize server, kaya biasa, bagi bagi route dan juga tolong gunakan konsep arsitektur
    a. model
    b. view
    c. controller
    d. middleware (authentikasi, authorisasi, validator, logger(gajuga gapapa), errorhandler(boleh banget))
    e. routes (authRouter, userRouter (patch, delete), biodataRouter(patch, delete), historyRouter)
    e.i. kalau misalkan relasi antara user dengan biodata itu one to one, generate biodata langsung saja ketika User.create() lalu UserBiodata.create()
    e.ii. kalau relasinya one to many, bisa di generate kapan saja
    f. utils/helpers (hashPassword, jwtHelper)
    g. validationSchema (kalau pake validation)

17. Route

    1. auth
       a. GET /register -> buat render register
       b. POST /register -> buat masukin data register
       c. GET /login -> buat render login
       d. POST /login -> buat masukin data login -> generate token (jwt.sign({id: user.id, email: user.email})disimpen di cookies, boleh juga simpen userid di cookies

    rute yang perlu authentikasi
    cek token di cookies, apakah req.cookies.token atau namanya apa lah itu kaya req.cookies.access_token itu ada atau nggak, kalau misalkan gak ada, dialihin ke halaman /login 2. play
    a. GET /play -> buat render game

    authorisasi (gapake jg gpp)
    b. POST /play/:id -> id dapet dari params, lalu dicek apakah id params itu punya dia atau bukan (authorisasi) req.cookies.user_id atau bisa juga dapetin userid yang disembunyiin dari token, jwt.verify(token) nanti bakal ke parse datanya jadi sesuai apa yang diumpetin
    authorisasi (gapake jg gpp)

    authorisasi (gapake jg gpp)
    c. PATCH /play/:id -> id sama kaya diatas dapet darimana, namun perbedaannya dia bakal update

    3. Biodata
       authorisasi (gapake jg gpp)
       a. GET /biodata/:id -> dapetin id darimana, dari req.params lalu di cek apakah id params === req.cookies.userid atau dari req.user
       authorisasi (gapake jg gpp)
       c. GET /editBiodata/:id -> ambil data si user dan render edit form
       authorisasi (gapake jg gpp)
       b. PATCH /biodata/:id -> buat ubah biodata

    4. History
       authorisasi (gapake jg gpp)
       a. GET /history/:id -> sebelumn ngecek historynya punya siapa, tolong cek dulu, apakah id dari req.params itu punya dia atau bukan, alias sama gak sih sama yang di cookies?. id buat ngecek ini history.findOne({ where: { id: req.params.id }})

18. bikin middleware, lalu dipake

19. bikin controller

20. di cek, apakah udah bisa atau nggak per routenya, kalau udah bisa lanjut bikin rute lainnya

# Step ngerjain yg enak

Inisialisasi -> Setup server (including models) -> route -> kalau perlu middleware, gw bikin middleware -> controller -> cek dulu di postman -> views -> cek di browser -> udah

class User {
constructor(username, password, email, role) {
this.username = username,
this.password = password,
this.email = email,
this.role = role
}

}

const ican = new User()
ican.username = username
ican.password = password
ican.email = email
ican.role = role

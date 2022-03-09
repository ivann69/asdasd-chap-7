npx sequelize model:create --name User --attributes username:string,email:string,password:string

npx sequelize model:create --name UserBiodata --attributes name:string,gender:enum,dob:date,status:string

// nambahin relasi
npx sequelize migration:create --name add-userid-to-userbiodat

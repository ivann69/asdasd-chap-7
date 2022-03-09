// schema validator untuk express-json-schema-validator
const registerSchema = {
  type: "object",
  required: ["username", "email", "password", "role"],
  properties: {
    username: {
      type: "string"
    },
    email: {
      type: "string"
    },
    password: {
      type: "string"
    },
    role: {
      type: "string"
    }
  }
}

module.exports = {
  registerSchema
}
const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
  id: Int!
  email: String
  token: String
  status: String
  account: Account
}
}`

module.exports = typeDefs

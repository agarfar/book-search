const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String
  }

  type Query {
    user(username: String!): User
    
  }
  
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # saveBook(user: String!, book: Book ): Book
    deleteBook(userId: ID!, bookID: ID!): Book
  }

`;

module.exports = typeDefs;

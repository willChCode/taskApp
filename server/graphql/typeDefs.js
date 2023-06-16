import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    hello: String
    tasks: [Task]
    taskById(id: ID!): Task
  }

  type Mutation {
    createTask(name: String, description: String): Task
    deleteTask(id: ID!): Task
    updateTask(id: ID!, name: String!, description: String): Task
  }

  type Task {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }
`;

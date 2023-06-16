import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  {
    tasks {
      _id
      name
      description
    }
  }
`;

export const GET_TASK_ID = gql`
  query ($id: ID!) {
    taskById(id: $id) {
      _id
      name
      description
    }
  }
`;

export const CREATE_TASK = gql`
  mutation ($name: String, $description: String) {
    createTask(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation ($_id: ID!, $name: String!, $description: String) {
    updateTask(id: $_id, name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;

export const DELETE_TASK = gql`
  mutation ($_id: ID!) {
    deleteTask(id: $_id) {
      _id
      description
    }
  }
`;

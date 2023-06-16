import { Task } from '../models/taskModel.js';

export const resolvers = {
  Query: {
    hello: () => 'Hello world',
    tasks: async () => await Task.find(),
    taskById: async (_, { id }) => await Task.findById({ _id: id })
  },
  Mutation: {
    createTask: async (_, { name, description }) => {
      const taskNew = new Task({
        name,
        description
      });
      const savedTask = await taskNew.save();
      return savedTask;
    },
    deleteTask: async (_, { id }) => {
      const taskDelete = await Task.findByIdAndDelete(
        { _id: id },
        { new: true }
      );
      if (!taskDelete) throw new Error('Task not found');

      return taskDelete;
    },
    updateTask: async (_, args) => {
      const taskUpdated = await Task.findByIdAndUpdate({ _id: args.id }, args, {
        new: true
      });
      if (!taskUpdated) throw new Error('Task not found');

      return taskUpdated;
    }
  }
};

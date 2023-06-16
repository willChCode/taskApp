import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const Task = model('Project', taskSchema);

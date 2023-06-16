import Input from '../Input';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TASK, GET_TASKS } from '../../graphql/tasks';
import { toast } from 'react-toastify';

export interface InputProps {
  title: string;
  description: string;
}
const initialValues = {
  title: '',
  description: ''
};

function TaskForm() {
  const [inputs, setInputs] = useState<InputProps>(initialValues);

  const [createTask, { loading, error }] = useMutation(CREATE_TASK, {
    refetchQueries: [
      {
        query: GET_TASKS
      },
      'GetTasks'
    ]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(inputs);
    createTask({
      variables: {
        name: inputs.title,
        description: inputs.description
      }
    });
    setInputs(initialValues);
    toast.success('created task successfully');
  };

  // console.log(inputs);

  return (
    <form
      onSubmit={handleSubmit}
      className='h-[64vh] flex flex-col gap-3 items-center justify-center py-4'>
      <h1 className='font-bold text-3xl mb-8'>CREATE TASK</h1>
      {error && <p>{error.message}</p>}
      <Input
        span='Title'
        name='title'
        onChange={handleChange}
        value={inputs.title}
      />
      <Input
        span='Description'
        name='description'
        onChange={handleChange}
        value={inputs.description}
      />

      <button
        disabled={!inputs.title || !inputs.description || loading}
        className='btn btn-accent btn-sm text-white'>
        Save
      </button>
    </form>
  );
}

export default TaskForm;

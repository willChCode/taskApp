import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GET_TASK_ID, UPDATE_TASK } from '../../graphql/tasks';
import Input from '../Input';
import { Task } from './LoadTask';
import { InputProps } from './TaskForm';

interface TaskDataID {
  taskById: Task;
}

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedTask] = useMutation(UPDATE_TASK);
  const { loading, error, data } = useQuery<TaskDataID>(GET_TASK_ID, {
    variables: {
      id: id
    },
    skip: !id
  });

  const [inputs, setInputs] = useState<InputProps>({
    title: '',
    description: ''
  });

  useEffect(() => {
    if (
      !loading &&
      data &&
      data.taskById &&
      data.taskById.name &&
      data.taskById.description
    ) {
      setInputs({
        title: data.taskById.name,
        description: data.taskById.description
      });
    }
  }, [loading, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  // console.log(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };
  // console.log(inputs);
  // console.log(id);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatedTask({
      variables: {
        _id: id,
        name: inputs.title,
        description: inputs.description
      }
    });
    navigate('/my-task');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='h-[64vh] flex flex-col gap-3 items-center justify-center py-4'>
      <h1 className='font-bold text-3xl mb-8'>UPDATE TASK</h1>
      {/* {error && <p>{error.message}</p>} */}
      <Input
        span='Title'
        name='title'
        value={inputs.title}
        onChange={handleChange}
        // value={inputs.title}
      />
      <Input
        span='Description'
        name='description'
        value={inputs.description}
        onChange={handleChange}
        // value={inputs.description}
      />
      <button
        disabled={!inputs.title || !inputs.description || loading}
        className='btn btn-accent btn-sm text-white'>
        update
      </button>
    </form>
  );
}

export default TaskDetails;

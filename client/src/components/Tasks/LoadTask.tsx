import { useQuery, useMutation } from '@apollo/client';
import { DELETE_TASK, GET_TASKS } from '../../graphql/tasks';
import Card from '../Card';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../Container';
import { toast } from 'react-toastify';

export interface Task {
  _id: string;
  name: string;
  description: string;
}
export interface TaskData {
  tasks: Task[];
}

function LoadTask() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery<TaskData>(GET_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [
      {
        query: GET_TASKS
      },
      'getTasks'
    ]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  // console.log(data);

  const handleDelete = (id: string) => {
    deleteTask({
      variables: {
        _id: id
      }
    });
    toast.success('Task deleted');
  };

  function shareOnWhatsApp(message: string) {
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
    window.location.href = url;
    // console.log(window.location.href);
  }

  return (
    <Container>
      <div className='flex justify-center items-center flex-wrap py-8'>
        {data?.tasks.length === 0 ? (
          <div>
            <p>No hay tareas...</p>
            <Link className='link font-semibold' to={'/create-task'}>
              crear tareas
            </Link>
          </div>
        ) : (
          data?.tasks.map(task => (
            <Card
              whatsAppAction={() =>
                shareOnWhatsApp(
                  `*TaskApp* \n ${task.name} \n ${task.description} \n _✅ Tarea compartida_  \n 📎 http://localhost:5173/my-task`
                )
              }
              deleted={() => handleDelete(task._id)}
              updated={() => navigate(`/my-task/${task._id}`)}
              key={task._id}
              title={task.name}
              description={task.description}
            />
          ))
        )}
      </div>
    </Container>
  );
}

export default LoadTask;

// function shareOnWhatsApp(message: string) {
//   const shareData = {
//     title: 'Compartir en WhatsApp TASKAPP',
//     text: message
//   };

//   if (navigator.share) {
//     navigator
//       .share(shareData)
//       .then(() => {
//         // Éxito al compartir en WhatsApp
//         console.log('Mensaje compartido en WhatsApp');
//       })
//       .catch(error => {
//         console.error('Error al compartir en WhatsApp:', error);
//         // Mostrar mensaje de error
//       });
//   } else {
//     const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
//     window.location.href = url;
//   }
// }

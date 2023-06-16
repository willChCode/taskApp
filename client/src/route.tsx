/**import NPM */
import { createBrowserRouter } from 'react-router-dom';

/**import all components */
import Layout from './Layout';
import Home from './components/Home/Home';
import TaskForm from './components/Tasks/TaskForm';
import LoadTask from './components/Tasks/LoadTask';
import TaskDetails from './components/Tasks/TaskDetails';

/** root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create-task',
        element: <TaskForm />
      },
      {
        path: '/my-task',
        element: <LoadTask />
      },
      {
        path: '/my-task/:id',
        element: <TaskDetails />
      }
    ]
  }
]);

export { router };

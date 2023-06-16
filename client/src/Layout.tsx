import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return (
    <main className='main-app'>
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </main>
  );
}

export default Layout;

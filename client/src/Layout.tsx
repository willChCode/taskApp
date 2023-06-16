import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';

function Layout() {
  return (
    <main className='main-app'>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;

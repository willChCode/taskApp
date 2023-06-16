import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul
      className='
      menu
      menu-horizontal
      flex 
      items-center 
      justify-end
      [&>li]:font-bold
      [&>li>*]:rounded-none
      max-sm:justify-center

      max-w-[2520px]
      mx-auto
      xl:px-36
      lg:px-20
      md:px-10
      sm:px-5
      px-2'>
      <li>
        <Link className='menu-link' to={'/'}>
          Home
        </Link>
      </li>
      <li>
        <Link className='menu-link' to={'/create-task'}>
          Create Tasks
        </Link>
      </li>
      <li>
        <Link className='menu-link' to={'/my-task'}>
          My Tasks
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;

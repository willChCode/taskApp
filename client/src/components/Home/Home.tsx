import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';
import Back from '../../assets/task-back.json';
import Container from '../Container';

function Home() {
  const playerRef = useRef(null);

  return (
    <Container>
      <div className='flex items-center justify-center py-[2rem]'>
        <section className='flex flex-col gap-4 max-sm:items-center'>
          <h1 className='font-extrabold text-5xl lg:text-6xl title max-md:text-4xl max-sm:text-center'>
            WELCOME TO TASK APP
          </h1>
          <h1 className='text-xl max-sm:text-center max-sm:text-lg'>
            Organize and manage your tasks efficiently!
          </h1>
          <Link
            className='btn btn-outline rounded-full w-52 font-bold max-sm:btn-md'
            to='/create-task'>
            Create a new task
          </Link>
          <Player
            ref={playerRef}
            autoplay
            loop
            controls={true}
            src={Back}
            className='block sm:hidden'
          />
        </section>
        <Player
          ref={playerRef}
          autoplay
          loop
          controls={true}
          src={Back}
          className='lg:w-[510px] md:w-[400px] max-sm:hidden'
        />
      </div>
    </Container>
  );
}

export default Home;

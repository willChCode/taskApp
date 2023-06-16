import { IoMdClose } from 'react-icons/io';
import { TfiPencil } from 'react-icons/tfi';
import whatsApp from '../public/whatsapp.svg';

interface CardProps {
  title: string;
  description: string;
  updated?: () => void;
  deleted?: () => void;
  whatsAppAction?: () => void;
}

function Card({
  title,
  description,
  updated,
  deleted,
  whatsAppAction
}: CardProps) {
  return (
    <div
      className='flex flex-col gap-3 w-60 border-[1px] 
       shadow-lg m-4'>
      <section className='flex justify-between'>
        <span onClick={deleted} className='btn btn-ghost btn-circle'>
          <IoMdClose size={27} />
        </span>
        <span onClick={updated} className='btn btn-ghost btn-circle'>
          <TfiPencil size={24} />
        </span>
      </section>
      <h1 className='font-bold px-4'>{title}</h1>
      <p className='text-justify line-clamp-5 leading-5 px-4'>{description}</p>
      <span className='flex justify-around px-4'>
        <label className='bg-green-400 px-4 py-1 text-xs font-semibold text-white rounded-full'>
          complete
        </label>
        <label className='bg-red-400 px-4 py-1 text-xs font-semibold text-white rounded-full'>
          In Process
        </label>
      </span>
      <span className='flex justify-end items-center gap-2 px-4 mb-4'>
        <img
          className='my-1 cursor-pointer'
          onClick={whatsAppAction}
          src={whatsApp}
          alt='whatsapp'
          width={35}
          height={35}
        />
      </span>
    </div>
  );
}

export default Card;

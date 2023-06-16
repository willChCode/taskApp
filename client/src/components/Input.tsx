interface InputProps {
  span: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

function Input({ span, name, onChange, value }: InputProps) {
  return (
    <label className='relative cursor-pointer flex'>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type='text'
        placeholder='Input'
        className='
          border-[1px]
          h-10 w-64 px-5 
          max-sm:w-56
          text-base rounded-lg 
          border-opacity-50 outline-none 
          focus:border-blue-500 
          placeholder-gray-300 placeholder-opacity-0 
          transition duration-200'
      />
      <span
        className='
        text-base text-neutral-500
        bg-white 
        absolute left-3 top-2 px-1 
        transition duration-200 input-text'>
        {' '}
        {span}
      </span>
    </label>
  );
}

export default Input;

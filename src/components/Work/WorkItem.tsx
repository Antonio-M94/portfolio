import { v4 as uuidv4 } from 'uuid';

interface Props {
  title: string;
  year: number;
  details: string;
  duration: string;
  tasks: string[];
}

const WorkItem = ({ title, year, details, duration, tasks }: Props) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
            {year}
          </span>
          <span className='font-semibold text-xl text-[#001b5e]'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
        </p>
        <p className='my-2 lg:text-2xl md:text-xl font-normal text-stone-600 mx-8'>{details}</p>
        <h1 className='text-lg font-semibold text-[#001b5e] mt-8'>Tasks</h1>
        <ul className='mr-16 space-y-1 ml-8 text-stone-800 list-inside dark:text-gray-400 w-5/6'>
          {tasks.map((task) => (
            <li
              key={uuidv4()}
              className='text-stone-800 w-full border-b-2 text-justify border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50'
            >
              {task}
            </li>
          ))}
        </ul>
      </li>
    </ol>
  );
};

export default WorkItem;

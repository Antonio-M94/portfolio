import { SiFiverr, SiGithub, SiLinkedin, SiUpwork } from 'react-icons/si';
import ToolTip from '../../ToolTip/Tooltip';

const Sidenav = () => {
  return (
    <div className='md:block hidden fixed top-[25%] z-10'>
      <div className='flex flex-col'>
        <a
          href='https://www.linkedin.com/in/isidro-antonio-mondrag%C3%B3n-espinal-77061a167/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='rounded-full shadow-lg bg-slate-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 flex justify-center'>
            <ToolTip tooltip='LinkedIn'>
              <SiLinkedin className='cursor-pointer' size={24} color='#0a66c2' />
            </ToolTip>
          </div>
        </a>
        <a href='https://github.com/Antonio-M94' target='_blank' rel='noopener noreferrer'>
          <div className='rounded-full shadow-lg bg-slate-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 flex justify-center'>
            <ToolTip tooltip='GitHub'>
              <SiGithub className='cursor-pointer' size={24} color='#272b33' />
            </ToolTip>
          </div>
        </a>
        <a
          href='https://www.upwork.com/freelancers/~0149f170c9b524038a?viewMode=1'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='rounded-full shadow-lg bg-slate-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 flex justify-center'>
            <SiUpwork className='cursor-pointer' size={24} color='#14a800' />
          </div>
        </a>
        <a
          href='https://www.fiverr.com/antoniomondragn?public_mode=true'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='rounded-full shadow-lg bg-slate-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 flex justify-center'>
            <ToolTip tooltip='fiverr'>
              <SiFiverr className='cursor-pointer scale-150' size={24} color='#1dbf73' />
            </ToolTip>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidenav;

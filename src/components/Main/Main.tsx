import { TypeAnimation } from 'react-type-animation';
import developers from '../../assets/developer.svg';

const Main = () => (
  <div id='main'>
    <img
      className='w-full h-screen object-cover object-left opacity-40'
      src={developers}
      alt='wallpaper'
    />
    <div className='w-full h-screen absolute top-0 left-0 bg-white/70'>
      <div className='max-w-[700px] mx-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-4xl md:text-6xl text-2xl font-bold text-[#001b5e] mt-16'>
          I&apos;m Isidro Mondragón
        </h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
          I&apos;m a{' '}
          <TypeAnimation
            sequence={['Developer', 1000, 'Coder', 2000, 'Tech Enthusiast', 2000]}
            wrapper='div'
            cursor
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px', paddingBottom: '32px' }}
          />
        </h2>
        <p className='text-justify py-4 px-6 font-normal text-stone-600 text-xl'>
          Passionate and responsible Frontend Developer, with UI and UX skills, looking for my next
          challenge. Interested in projects that can create a unique and personalized user
          experience.
        </p>
      </div>
    </div>
  </div>
);

export default Main;

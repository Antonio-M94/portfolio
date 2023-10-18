import ProjectItem from './ProjectItem';
import portfolio from '../../assets/portfolio.png';
import watherApp from '../../assets/weather.png';

const Projects = () => {
  return (
    <div className='w-full bg-slate-50'>
      <div id='projects' className='max-w-[1400px] m-auto md:pl-20 p-4 pt-32 pb-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-justify py-8'>
          Here you will find some of the personal projects that I have created with different
          libraries and frameworks applying my skills.
        </p>
        <div className='grid sm:grid-cols-2 gap-12 my-4'>
          <ProjectItem
            img={portfolio}
            title='Portfolio Web'
            linkProject='https://github.com/Antonio-M94/portfolio'
          />
          <ProjectItem
            img={watherApp}
            title='Weather App'
            linkProject='https://weather-app-iamedev.vercel.app/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

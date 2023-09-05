import { FaReact } from 'react-icons/fa';
import {
  SiBitbucket,
  SiBootstrap,
  SiConfluence,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import ToolTip from '../ToolTip/Tooltip';

const skills = [
  { icon: SiHtml5, color: '#e84e2b', tooltip: 'HTML5' },
  { icon: SiCss3, color: '#1e7bbf', tooltip: 'CSS3' },
  { icon: SiJavascript, color: '#f0db4f', tooltip: 'JavaScript' },
  { icon: FaReact, color: '#0074a6', tooltip: 'React js' },
  { icon: SiTypescript, color: '#235a97', tooltip: 'TypeScript' },
  { icon: SiJest, color: '#bd561d', tooltip: 'Jest' },
  { icon: SiMui, color: '#007FFF', tooltip: 'Material UI' },
  { icon: SiBootstrap, color: '#4c0bce', tooltip: 'Bootstrap' },
  { icon: SiTailwindcss, color: '#38bdf8', tooltip: 'Tailwind CSS' },
  { icon: SiGit, color: '#e84e2b', tooltip: 'Git' },
  { icon: SiGithub, color: '#272b33', tooltip: 'GitHub' },
  { icon: SiNodedotjs, color: '#026e00', tooltip: 'Node js' },
  { icon: SiMongodb, color: '#00684a', tooltip: 'MongoDB' },
  { icon: SiJira, color: '#0052cc', tooltip: 'Jira' },
  { icon: SiConfluence, color: '#0052cc', tooltip: 'Confluence' },
  { icon: SiBitbucket, color: '#0052cc', tooltip: 'Bitbucket' },
];
const About = () => {
  return (
    <div id='about' className='md:pl-20 p-4 pb-40  bg-slate-50 pt-32 overflow-hidden'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About me</h1>
      <p className='text-center py-12 font-normal text-stone-600 text-2xl lg:px-20'>
        Here you will find more information about me, my technical knowledge about programming and
        the technology I currently use in my projects.
      </p>
      <div className='grid sm:grid-cols-1  md:grid-cols-2 gap-12'>
        <div className='pl-2 pr-2'>
          <h2 className='text-4xl font-bold text-center text-[#001b5e] pb-8 pt-16'>Who am I?</h2>
          <p className='text-center font-normal italic text-stone-600 text-2xl'>
            I&apos;m a frontend web developer with more than a year of experience in the IT area.
          </p>
          <br />
          <p className='text-center font-normal italic text-stone-600 text-2xl'>
            Hard working and efficient, responsible, dynamic, with initiative and analytical for
            problem solving. With extensive computer and administrative knowledge.
          </p>
          <br />
          <p className='text-center font-normal italic text-stone-600 text-2xl'>
            I am open to job opportunities where I can contribute, learn and grow. If you have a
            good opportunity that fits my skills and experience, do not hesitate to contact me.
          </p>
        </div>
        <div>
          <h2 className='text-4xl font-bold text-center text-[#001b5e] pb-8 pt-16'>My Skills</h2>
          <div className='flex justify-center flex-wrap'>
            {skills.map(({ icon: Icon, color, tooltip }) => (
              <div className='ml-8 mb-16' key={tooltip}>
                <ToolTip tooltip={tooltip}>
                  <Icon size={50} color={color} />
                </ToolTip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

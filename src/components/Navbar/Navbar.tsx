import { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineWorkOutline } from 'react-icons/md';
import perfil from '../../assets/perfil.jpg';
import NavItem from './NavItem';
import Sidenav from './Sidenav/Sidenav';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    { Icon: AiOutlineHome, text: 'Home', href: '#main', onClick: handleNav },
    { Icon: BsPerson, text: 'About', href: '#about', onClick: handleNav },
    { Icon: MdOutlineWorkOutline, text: 'Experience', href: '#work', onClick: handleNav },
    { Icon: AiOutlineProject, text: 'Projects', href: '#projects', onClick: handleNav },
    { Icon: AiOutlineMail, text: 'Contact', href: '#contact', onClick: handleNav },
  ];
  return (
    <div>
      <nav className='z-[99] fixed w-full py-2 bg-slate-200 flex justify-between lg:px-16 pl-6 border border-white'>
        <div className='pt-3 w-full flex justify-between '>
          <a
            className='flex items-center text-sm font-bold leading-relaxed uppercase cursor-pointer text-slate-800'
            href='#about'
            rel='noopener noreferrer'
          >
            <img src={perfil} alt='perfil' className='w-12 h-12 rounded-full' />
            <p className='ml-2 md:text-xs xl:text-sm whitespace-nowrap'>Isidro Mondragón</p>
          </a>
          <AiOutlineMenu
            size={40}
            onClick={handleNav}
            color='#0b2229'
            className='right-4 z-[99] md:hidden cursor-pointer fixed'
          />
          <div className='z-[99] md:block hidden py-3'>
            <ul className='flex'>
              {navItems.map((item) => (
                <NavItem key={item.href} Icon={item.Icon} text={item.text} href={item.href} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
              onClick={handleNav}
              rel='noopener noreferrer'
            >
              <item.Icon size={20} />
              <span className='pl-4'>{item.text}</span>
            </a>
          ))}
        </div>
      ) : (
        ''
      )}
      <Sidenav />
    </div>
  );
};
export default Navbar;

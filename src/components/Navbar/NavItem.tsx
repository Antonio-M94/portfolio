import { IconType } from 'react-icons';

interface NavItemProps {
  Icon: IconType;
  text: string;
  href: string;
}

const NavItem = ({ Icon, text, href }: NavItemProps) => (
  <li className='nav-item px-4'>
    <a
      className='flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
      href={href}
      rel='noopener noreferrer'
    >
      <Icon color='#0b2f58c8' size={20} />
      <span className='ml-2 text-slate-800 md:text-xs xl:text-sm hover:text-yellow-600 hover:scale-110'>
        {text}
      </span>
    </a>
  </li>
);

export default NavItem;

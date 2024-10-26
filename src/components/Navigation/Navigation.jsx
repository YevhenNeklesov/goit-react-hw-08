
import clsx from 'clsx';
import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
const buildLinkClass = ({ isActive }) => {
  return clsx(s.unActive, isActive && s.active);
  };
  

  return (
      <>
          <nav className='flex  items-center'>
              <ul className='flex gap-x-4'>
                  <li className={s.item}>
                    <NavLink className={buildLinkClass} to="/">Home</NavLink>
                </li>
                    <li className={s.item}>
                    <NavLink className={buildLinkClass} to="/contacts">Contacts</NavLink>
                </li>
              </ul>
        </nav>
    </>
  )
}

export default Navigation
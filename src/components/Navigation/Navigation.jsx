
import clsx from 'clsx';
import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
const buildLinkClass = ({ isActive }) => {
  return clsx('text-slate-100', isActive && 'text-red-600');
};

  return (
      <>
          <nav>
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
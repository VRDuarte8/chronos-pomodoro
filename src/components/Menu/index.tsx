import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from 'lucide-react';
import styles from './styles.module.css';
import { MenuLink } from '../MenuLink';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <MenuLink><HistoryIcon/></MenuLink>
      <MenuLink><HouseIcon/></MenuLink>
      <MenuLink><SettingsIcon/></MenuLink>
      <MenuLink><SunIcon/></MenuLink>
    </nav>
  );
}

import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Props from '../interfaces/Props';
import Navbar from './Navbar';

export default function Layout(props: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className={`header ${theme}`}>
        <Navbar />
      </div>
      {props.children}
    </div>
  );
}

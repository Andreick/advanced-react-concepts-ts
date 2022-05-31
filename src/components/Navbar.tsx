import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="row">
      <div>React Context App</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

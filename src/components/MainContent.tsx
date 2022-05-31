import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function MainContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`content ${theme}`}>
      <h1>Welcome to my {theme} app!</h1>
      <p>Use Context API to shara data between components</p>
    </div>
  );
}

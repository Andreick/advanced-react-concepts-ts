import './App.css';
import Counter from './components/Counter';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import UserInfo from './components/UserInfo';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <MainContent />
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;

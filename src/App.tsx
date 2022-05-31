import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import UserInfo from './components/UserInfo';
import UserList from './components/UserList';
import { ThemeContextProvider } from './context/ThemeContext';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="page-header">
          <NavLink to="/">Home</NavLink>{' '}
          <NavLink to="/products">Products</NavLink>{' '}
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductPage />}>
              <Route path=":id" element={<ProductPage />} />
            </Route>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

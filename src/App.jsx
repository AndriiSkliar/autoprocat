// import { lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import HomePage from './pages/HomePage/HomePage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
// const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  return ( 
    <AppWrapper>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;

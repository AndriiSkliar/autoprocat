import { lazy, Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { AppWrapper } from './App.styled';
import { Loader } from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

function App() {
  return ( 
    <AppWrapper>
      <Layout>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </AppWrapper>
  );
}

export default App;

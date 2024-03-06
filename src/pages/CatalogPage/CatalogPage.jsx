import { ReactComponent as IconFavoriteNormal } from 'assets/icons/favorite-normal.svg'
import { ReactComponent as IconFavoriteActive } from 'assets/icons/favorite-active.svg'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAutos } from '../../redux/autos/autos.operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchAutos())
  }, [dispatch])
  
  return (
      <>
      CatalogPage
      <IconFavoriteNormal/>
      <IconFavoriteActive/>
      </>
  );
};

export default CatalogPage;
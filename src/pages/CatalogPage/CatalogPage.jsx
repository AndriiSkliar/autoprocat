import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutos } from '../../redux/autos/autos.operations';
import { selectAutos, selectError, selectIsLoading, selectPage } from '../../redux/selectors/autos.selectors';
import { incrementPage } from '../../redux/autos/autos.reducer';
import { Loader } from '../../components/Loader/Loader';
import AutosList from '../../components/AutosList/AutosList';
import SearchSelectBrands from '../../components/Select/SearchSelectBrands';
import SearchSelectPrice from '../../components/Select/SearchSelectPrice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const autos = useSelector(selectAutos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const [autosBrand, setAutosBrands] = useState('');
  const [autosPrice, setAutosPrice] = useState('');
  
  useEffect(() => { 
    if (autos.length === 0) {
      dispatch(fetchAutos(page)); 
    }
  }, [dispatch, autos.length, page]);
  
  const handleLoadMoreClick = () => {
    dispatch(incrementPage())
    dispatch(fetchAutos(page + 1)); 
  };
  
  return (
    <main className="container">
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      <div>
        <SearchSelectBrands setAutosBrands={setAutosBrands} />
        <SearchSelectPrice setAutosPrice={setAutosPrice} />
      </div>
      <AutosList autos={autos} />
      {autos.length > 11 && <button type='button' onClick={handleLoadMoreClick}>Load more...</button>}
    </main>
  );
};

export default CatalogPage;
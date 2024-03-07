import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutos } from '../../redux/autos/autos.operations';
import { Loader } from '../../components/Loader/Loader';
import { selectAutos, selectError, selectIsLoading } from '../../redux/selectors/autos.selectors';
import AutosList from '../../components/AutosList/AutosList';
import SearchSelectBrands from '../../components/Select/SearchSelectBrands';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const autos = useSelector(selectAutos);
  const [autosBrand, setAutosBrands] = useState('');
  
  useEffect(() => { 
    dispatch(fetchAutos(page))
  }, [dispatch, page])
  
  const handleLoadMoreClick = () => {
    setPage(page + 1); 
  };
  console.log(autosBrand);
  return (
    <main className="container">
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      <div>
        Form
        <SearchSelectBrands setAutosBrands={setAutosBrands} />
      </div>
      <AutosList autos={autos} />
      {autos.length > 11 && <button type='button' onClick={handleLoadMoreClick}>Load more...</button>}
    </main>
  );
};

export default CatalogPage;
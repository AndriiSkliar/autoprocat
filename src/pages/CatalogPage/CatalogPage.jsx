import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutos } from '../../redux/autos/autos.operations';
import { Loader } from '../../components/Loader/Loader';
import { selectAutos, selectError, selectIsLoading } from '../../redux/selectors/autos.selectors';
import AutosList from '../../components/AutosList/AutosList';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const autos = useSelector(selectAutos);

  useEffect(() => { 
    dispatch(fetchAutos(page))
  }, [dispatch, page])

  const handleLoadMoreClick = () => {
    setPage(page + 1); 
  };
  
  return (
    <main className="container">
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      <div>Form</div>
      <AutosList autos={autos} />
      <button type='button' onClick={handleLoadMoreClick}>Load more...</button>
    </main>
  );
};

export default CatalogPage;
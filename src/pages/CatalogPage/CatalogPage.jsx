import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutos, fetchSelectedAutos } from '../../redux/autos/autos.operations';
import { selectAutos, selectError, selectIsLoading, selectPage, selectSearchResult } from '../../redux/selectors/autos.selectors';
import { incrementPage, decrementPage } from '../../redux/autos/autos.reducer';
import { selectIsOpenModal } from '../../redux/selectors/modal.selectors';
import { Loader } from '../../components/Loader/Loader';
import AutosList from '../../components/AutosList/AutosList';
import MyForm from '../../components/Select/MyForm';
import Button from '../../components/Button/Button';
import PopUp from '../../components/PopUp/PopUp';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsOpenModal);
  const autos = useSelector(selectAutos);
  const searchResult = useSelector(selectSearchResult);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const [searchParams, setSearchParams] = useState({
    min: '',
    max: '',
    make: '',
    rentalPrice: '',
  });

  useEffect(() => { 
    if (autos.length === 0) {
      dispatch(fetchAutos(page)); 
    }
  }, [dispatch, autos.length, page]);

  useEffect(() => { 
    const { make, rentalPrice } = searchParams;
    if (make || rentalPrice) {
      dispatch(decrementPage());
      dispatch(fetchSelectedAutos({ make, rentalPrice, page: 1 }));
    }
  }, [dispatch,searchParams]);
  
  const handleLoadMoreClick = () => {
    dispatch(incrementPage())
    dispatch(fetchAutos(page + 1)); 
  };

  const handleSearchLoadMoreClick = () => {
    const { make, rentalPrice } = searchParams;
    dispatch(incrementPage());
    dispatch(fetchSelectedAutos({ make, rentalPrice, page: page + 1 }));
  };

  const searchCount = searchResult.length;
  const shouldShowAutosList = !isLoading && (autos.length > 0 && searchCount === 0 || searchCount > 0);
  const shouldShowLoadMoreButton = !isLoading && autos.length > 11 && searchCount === 0;
  const searchShowLoadMoreButton = !isLoading && searchCount > 11;

  return (
    <main className="container">
      {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}

      <MyForm setSearchParams={setSearchParams}/>

      {shouldShowAutosList && (
        <AutosList autos={searchCount > 0 ? searchResult : autos} />
      )}

      {shouldShowLoadMoreButton && (
        <Button text="Load more..." onClick={handleLoadMoreClick} />
      )}

      {searchShowLoadMoreButton && (
        <Button text="Load more..." onClick={handleSearchLoadMoreClick} />
      )}
      {isOpenModal && <PopUp />}
    </main>
  );
};

export default CatalogPage;
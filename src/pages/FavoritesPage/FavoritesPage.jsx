import { useSelector } from "react-redux";
import { selectFavorites, selectIsLoading } from "../../redux/selectors/autos.selectors";
import { selectIsOpenModal } from "../../redux/selectors/modal.selectors";
import AutosList from "../../components/AutosList/AutosList";
import NotFound from "../../components/NotFound/NotFound";
import Loader from "../../components/Loader/Loader";
import PopUp from "../../components/PopUp/PopUp";


const FavoritesPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const favorite = useSelector(selectFavorites);
  const isOpenModal = useSelector(selectIsOpenModal);

  return (
    <main>
      {isLoading && <Loader />}

      {favorite.length === 0 ? (
        <NotFound />
      ) : (
          <AutosList autos={favorite} />
      )} 

      {isOpenModal && <PopUp />}
    </main>
  );
};

export default FavoritesPage;
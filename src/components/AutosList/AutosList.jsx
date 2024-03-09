import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors/autos.selectors';
import AutoCard from '../AutoCard/AutoCard';
import { StyledList } from './AutosList.styled';

const AutosList = ({ autos = [], searchResult = [] }) => {
  const favorites = useSelector(selectFavorites);
  const data = searchResult.length > 0 ? searchResult : autos;
  let sortedData = data;

  if (favorites.length > 0) {
    const favoritesIds = favorites.map(car => car.id);
    sortedData = [...data].sort((a, b) => {
    const idAInFavorites = favoritesIds.includes(a.id);
    const idBInFavorites = favoritesIds.includes(b.id);
    
    if (idAInFavorites && !idBInFavorites) {
      return -1;
    } else if (!idAInFavorites && idBInFavorites) {
      return 1; 
    } else {
      return 0; 
    }
  })}
  
   return (
     <StyledList>
      <ul className="autosList">
        {sortedData.map((auto) => (
          <AutoCard
            key={auto.id}
            auto={auto}
          />
        ))}
      </ul>
    </StyledList>
  );
};

export default AutosList;
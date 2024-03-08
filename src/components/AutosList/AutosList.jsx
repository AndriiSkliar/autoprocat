import AutoCard from '../AutoCard/AutoCard';
import { StyledList } from './AutosList.styled';

const AutosList = ({ autos = [], searchResult = [] }) => {
  const data = searchResult.length > 0 ? searchResult : autos;
  
   return (
    <StyledList>
      <ul className="autosList">
        {data.map((auto) => (
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
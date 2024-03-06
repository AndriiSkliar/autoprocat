import AutoCard from '../AutoCard/AutoCard';
import { StyledList } from './AutosList.styled';

const AutosList = ({ autos }) => {
  return <StyledList>
    <ul className="autosList">
      {autos.map((auto) => (
        <AutoCard
          key={auto.id}
          id={auto.id}
        />
      ))}
    </ul>
  </StyledList>;
};

export default AutosList;
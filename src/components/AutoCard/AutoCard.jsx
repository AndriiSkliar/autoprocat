import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors/autos.selectors';
import { addToFavorites, removeFromFavorites } from '../../redux/autos/autos.reducer';
import { openModal } from '../../redux/modal/modal.reducer';
import { ReactComponent as IconFavoriteNormal } from 'assets/icons/favorite-normal.svg'
import { ReactComponent as IconFavoriteActive } from 'assets/icons/favorite-active.svg'
import Button from '../Button/Button';

const AutoCard = ({ auto }) => {
  const {img, make, model, year, rentalPrice, address, rentalCompany, type, id, functionalities, fuelConsumption, engineSize, description, accessories, rentalConditions, mileage } = auto;
  
  const dispatch = useDispatch();
  const favoriteAuto = useSelector(selectFavorites);

  const inFavorites = favoriteAuto.some((favorite) => favorite.id === id);

  const parts = address ? address.split(", ") : '';
  const city = parts[1];
  const country = parts[2];
  const premium = rentalCompany.includes('Premium') ? 'Premium' : '';
  const formattedType = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  const maxLength = 20;
  const firstAccessory = functionalities[0];
  const isLong = firstAccessory.length > maxLength;
  const displayedAccessory = isLong ? (firstAccessory.substring(0, maxLength) + '...') : firstAccessory;

  const handleAddToFavorite = (cocktailId) => {
    dispatch(addToFavorites(cocktailId));
  };

  const handleDeleteFromFavorites = (autoId) => {
    dispatch(removeFromFavorites(autoId));
  };

  return (
    <li>
      <div>
        <img src={img} alt={make + model} />
        {inFavorites ? (
          <Button text={<IconFavoriteActive />}
            onClick={() => {
              handleDeleteFromFavorites(id);
            }}
          />
        ) : (
            <Button text={<IconFavoriteNormal/>}
            onClick={() => {
              handleAddToFavorite(auto);
            }}
          />
        )}
      </div>
      <div>
        <h3>{make}{' '}
          <span>{model}</span>,{' '}
          {year}
        </h3>
        <span>{rentalPrice}</span>
      </div>
      <ul>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
        <li>{premium}</li>
      </ul>
      <ul>
        <li>{formattedType}</li>
        <li>{model}</li>
        <li>{id}</li>
        <li>{displayedAccessory}</li>
      </ul>
      <Button text="Learn more"
        onClick={() => dispatch(openModal({ 
          img, 
          make, 
          model, 
          city, 
          country, 
          id, 
          year, 
          formattedType, 
          fuelConsumption, 
          engineSize, 
          description, 
          accessories, 
          functionalities, 
          rentalConditions, 
          mileage, 
          rentalPrice 
        }))}
      />
    </li>
  );
};

export default AutoCard;
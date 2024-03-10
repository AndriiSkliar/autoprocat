import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors/autos.selectors';
import { addToFavorites, removeFromFavorites } from '../../redux/autos/autos.reducer';
import { openModal } from '../../redux/modal/modal.reducer';
import { ReactComponent as IconFavoriteNormal } from 'assets/icons/favorite-normal.svg'
import { ReactComponent as IconFavoriteActive } from 'assets/icons/favorite-active.svg'
import Button from '../Button/Button'
import { StyledItemWrapper, StyledImgWrapper, StyledButtonWrapper, StyledTitleWrapper, StyledTitle, StyledTitleAccent, StyledSpan, SpecificStyledCountryList, StyledCountryItem, StyledBtnLearnMore, StyledCountryList } from './AutoCard.styled';

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

  const handleAddToFavorite = (autoId) => {
    dispatch(addToFavorites(autoId));
  };

  const handleDeleteFromFavorites = (autoId) => {
    dispatch(removeFromFavorites(autoId));
  };

  return (
    <StyledItemWrapper>
      <StyledImgWrapper>
        <img src={img} alt={make + model}  className="autoImg"/>
        {inFavorites ? (
          <StyledButtonWrapper>
            <Button text={<IconFavoriteActive />}
              onClick={() => {
                handleDeleteFromFavorites(id);
            }}
          />
          </StyledButtonWrapper>
        ) : (
          <StyledButtonWrapper>
            <Button text={<IconFavoriteNormal/>}
              onClick={() => {
                handleAddToFavorite(auto);
              }}
            />
          </StyledButtonWrapper>
        )}
      </StyledImgWrapper>
      <StyledTitleWrapper>
        <StyledTitle>{make}{' '}
          <StyledTitleAccent>{model}</StyledTitleAccent>,{' '}
          {year}
        </StyledTitle>
        <StyledSpan>{rentalPrice}</StyledSpan>
      </StyledTitleWrapper>
      <StyledCountryList>
        <StyledCountryItem>{city}</StyledCountryItem>
        <StyledCountryItem>{country}</StyledCountryItem>
        <StyledCountryItem>{rentalCompany}</StyledCountryItem>
        {premium && <StyledCountryItem>{premium}</StyledCountryItem>}
      </StyledCountryList>
      <SpecificStyledCountryList>
        <StyledCountryItem>{formattedType}</StyledCountryItem>
        <StyledCountryItem>{model}</StyledCountryItem>
        <StyledCountryItem>{id}</StyledCountryItem>
        <StyledCountryItem>{displayedAccessory}</StyledCountryItem>
      </SpecificStyledCountryList>
      <StyledBtnLearnMore onClick={() => dispatch(openModal({ 
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
      }))}>Learn more
      </StyledBtnLearnMore>
    </StyledItemWrapper>
  );
};

export default AutoCard;
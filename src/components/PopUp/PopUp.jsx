import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.reducer';
import { selectModalData } from '../../redux/selectors/modal.selectors';
import { ReactComponent as IconClose } from 'assets/icons/close-btn.svg'
import { AdditionalStyledTitleFunc, StyledImgPopWrapper, StyledPopUp, StyledTextDesc, StyledTitleAccentPop, StyledTitleFunc, StyledTitlePop, ConditionsListPop, ConditionsListItem, BeforeColon, AfterColon, PhoneLink, StyledTitleWrapper } from './PopUp.styled';
import { ReactComponent as IconDefaultAuto } from 'assets/icons/default-auto.svg'
import { StyledCountryItem, StyledCountryList } from '../AutoCard/AutoCard.styled';

const PopUp = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const { img, make, model, city, country, id, year, formattedType, fuelConsumption, engineSize, description, accessories, functionalities, rentalConditions, mileage, rentalPrice } = modalData; 
  const conditionsArray = rentalConditions.split('\n');
  const formattedMileage = Number(mileage).toLocaleString('en-US', { useGrouping: true });
  const rentalList = [...conditionsArray, `Mileage: ${formattedMileage}`, `Rental Price: ${rentalPrice}`];
  
  const conditionsList = rentalList.map((condition, i) => {
    const colonIndex = condition.indexOf(':');

    if (colonIndex !== -1) {
      const beforeColon = condition.substring(0, colonIndex + 1);
      const afterColon = condition.substring(colonIndex + 1);

      return (
        <ConditionsListItem key={i}>
          <BeforeColon>{beforeColon}</BeforeColon>
          <AfterColon>{afterColon}</AfterColon>
        </ConditionsListItem>
      );
    } else {

      return <ConditionsListItem key={i}>{condition}</ConditionsListItem>;
    }
  });
  
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <StyledPopUp onClick={handleOverlayClick}>
      <div className="popUp">
        <button className="closeBtn" onClick={() => dispatch(closeModal())}>
          <IconClose/>
        </button>
        <StyledImgPopWrapper>
          {(img && img.length > 0) ? (<img className='autoPopImg' src={img} alt={`${make} ${model}`} />) : (<IconDefaultAuto />)}        </StyledImgPopWrapper>
        <StyledTitleWrapper>
          <StyledTitlePop>{make}{' '}
            <StyledTitleAccentPop>{model}</StyledTitleAccentPop>,{' '}
            {year}
          </StyledTitlePop>
        </StyledTitleWrapper>
        <StyledCountryList>
          <StyledCountryItem>{city}</StyledCountryItem>
          <StyledCountryItem>{country}</StyledCountryItem>
          <StyledCountryItem>Id: {id}</StyledCountryItem>
          <StyledCountryItem>Year: {year}</StyledCountryItem>
          <StyledCountryItem>Type: {formattedType}</StyledCountryItem>
        </StyledCountryList>
        <StyledCountryList>
          <StyledCountryItem>Fuel Consumption: {fuelConsumption}</StyledCountryItem>
          <StyledCountryItem>Engine Size: {engineSize}</StyledCountryItem>
        </StyledCountryList>
        <StyledTextDesc>{description}</StyledTextDesc>
        <StyledTitleFunc>Accessories and functionalities:</StyledTitleFunc>
        <StyledCountryList>
          {accessories.map((accessorie, i) => (
            <StyledCountryItem key={i}>{accessorie}</StyledCountryItem>
          ))}
        </StyledCountryList>
        <StyledCountryList>
          {functionalities.map((functionalitie, i) => (
            <StyledCountryItem key={i}>{functionalitie}</StyledCountryItem>
          ))}
        </StyledCountryList>
        <AdditionalStyledTitleFunc>Rental Conditions:</AdditionalStyledTitleFunc>
        <ConditionsListPop>
          {conditionsList}
        </ConditionsListPop>
        <PhoneLink href="tel:+380730000000" type="button" target="_blank" rel="noreferrer noopener">Rental car</PhoneLink>
      </div>
    </StyledPopUp>
  );
};
export default PopUp;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modal.reducer';
import { selectModalData } from '../../redux/selectors/modal.selectors';
import Button from '../Button/Button';
import { StyledPopUp } from './Styled';

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
        <li key={i}>
          <span className="before-colon">{beforeColon}</span>
          <span className="after-colon">{afterColon}</span>
        </li>
      );
    } else {

      return <li key={i}>{condition}</li>;
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
        <Button className="closeBtn" text="❌" onClick={() => dispatch(closeModal())}/>
        <div>
          <img src={img} alt={make + model} />
        </div>
        <div>
          <h2>{make}{' '}
            <span>{model}</span>,{' '}
            {year}
          </h2>
        </div>
        <ul>
          <li>{city}</li>
          <li>{country}</li>
          <li>Id: {id}</li>
          <li>Year: {year}</li>
          <li>Type: {formattedType}</li>
        </ul>
        <ul>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size: {engineSize}</li>
        </ul>
        <p>{description}</p>
        <h3>Accessories and functionalities:</h3>
        <ul>
          {accessories.map((accessorie, i) => (
            <li key={i}>{accessorie}</li>
          ))}
        </ul>
        <ul>
          {functionalities.map((functionalitie, i) => (
            <li key={i}>{functionalitie}</li>
          ))}
        </ul>
        <h3>Rental Conditions:</h3>
        <ul>
          {conditionsList}
        </ul>
        <a href="tel:+380730000000" type="button" target="_blank" rel="noreferrer noopener">Rental car</a>
      </div>
    </StyledPopUp>
  );
};
export default PopUp;
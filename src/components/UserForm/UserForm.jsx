import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAutosBrands } from '../../redux/autos/autos.operations';
import { selectAutosBrands } from '../../redux/selectors/autos.selectors';
import { nanoid } from 'nanoid';
import { StyledArrowDiv, StyledButton, StyledForm, StyledFormDiv, StyledIconArrow, StyledInputWrapper, StyledInputsWrapper, StyledLabel, StyledSelect } from './UserForm.styled';

const UserForm = ({ setSearchParams }) => {
  const dispatch = useDispatch();
  const autosBrands = useSelector(selectAutosBrands);

  useEffect(() => {
    if (autosBrands.length === 0) dispatch(fetchAutosBrands());
  }, [dispatch, autosBrands]);

  const handleSubmit = (values) => {
    setSearchParams(values);
  };

  return (
    <Formik
      initialValues={{
        make: '',
        rentalPrice: '',
        min: '',
        max: ''
      }}
      onSubmit={handleSubmit}
    >
      {() => (
        <StyledForm>
          <StyledFormDiv>
            <StyledLabel htmlFor="selectBrands">Car brand</StyledLabel>
            <StyledArrowDiv>
              <Field as={StyledSelect} id="selectBrands" name="make">
                <option className='option' key={nanoid()} value="">Enter the text</option>
                {autosBrands.map((autosBrand, i) => (
                  <option className='option' key={i} value={autosBrand}>
                    {autosBrand}
                  </option>
                ))}
              </Field>
              <StyledIconArrow/>
            </StyledArrowDiv>
          </StyledFormDiv>
          <StyledFormDiv>
            <StyledLabel htmlFor="selectPrice">Price/ 1 hour</StyledLabel>
            <StyledArrowDiv>
              <Field as={StyledSelect} id="selectPrice" name="rentalPrice">
                <option className='option' key={nanoid()} value=''>{`To\u0020\u00A0\u00A0$`}</option>
                {[30, 40, 50, 60, 70, 80, 90, 100].map((price) => (
                  <option className='option' key={price} value={price}>{price}</option>
                ))}
              </Field>
              <StyledIconArrow/>
            </StyledArrowDiv>
          </StyledFormDiv>
          <StyledFormDiv>
            <StyledLabel htmlFor="mileageFrom">Сar mileage / km</StyledLabel>
            <StyledInputsWrapper>
              <StyledInputWrapper>
                <Field className='input' type="number" id="mileageFrom" name="min" min="1" max="99999"/>
                <span className='span'>From</span>
              </StyledInputWrapper>
              <StyledInputWrapper>
                <Field className='input' type="number" name="max" min="1" max="99999"/>
                <span className='span'>To</span>
              </StyledInputWrapper>
            </StyledInputsWrapper>
          </StyledFormDiv>
          <StyledButton type="submit">
            Search
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default UserForm;

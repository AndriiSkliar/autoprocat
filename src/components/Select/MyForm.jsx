import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAutosBrands } from '../../redux/autos/autos.operations';
import { selectAutosBrands } from '../../redux/selectors/autos.selectors';
import { nanoid } from 'nanoid';

const MyForm = ({ setSearchParams }) => {
  const dispatch = useDispatch();
  const autosBrands = useSelector(selectAutosBrands);

  useEffect(() => {
    if (autosBrands.length === 0) dispatch(fetchAutosBrands());
  }, [dispatch, autosBrands]);

  const handleSubmit = (values) => {
    setSearchParams(values);
  };

  return (
    <div>
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
          <Form>
            <div>
              <label htmlFor="selectBrands">Car brand</label>
              <Field as="select" id="selectBrands" name="make">
                <option key={nanoid()} value="">Enter the text</option>
                {autosBrands.map((autosBrand, i) => (
                  <option key={i} value={autosBrand}>
                    {autosBrand}
                  </option>
                ))}
              </Field>
            </div>
            <div>
              <label htmlFor="selectPrice">Price/ 1 hour</label>
              <Field as="select" id="selectPrice" name="rentalPrice">
                <option key={nanoid()} value="">To $</option>
                {[30, 40, 50, 60, 70, 80, 90, 100].map((price) => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </Field>
            </div>
            <div>
              <label htmlFor="mileageFrom">Сar mileage / km</label>
              <Field type="number" id="mileageFrom" name="min" placeholder="From"/>
              <label htmlFor="mileageTo">Сar mileage / km</label>
              <Field type="number" id="mileageTo" name="max" placeholder="To"/>
            </div>
            <button type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;

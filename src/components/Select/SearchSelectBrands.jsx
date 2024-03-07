import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAutosBrands } from '../../redux/autos/autos.operations.js';
import { selectAutosBrands, selectError, selectIsLoading } from '../../redux/selectors/autos.selectors.js';
import { Loader } from '../Loader/Loader.jsx';
import { nanoid } from 'nanoid'

const SearchSelectBrands = ({setAutosBrands}) => {
  const dispatch = useDispatch();
  const autosBrands = useSelector(selectAutosBrands);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

    useEffect(() => {
    dispatch(fetchAutosBrands());
  }, [dispatch]);

  const searchByBrand = (e) => {
    e.preventDefault();
    const brandParam = e.target.value;

    if (brandParam !== 'hide') setAutosBrands(brandParam);
    if (brandParam === 'hide') setAutosBrands('');
    };
    
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <select
        id="autosBrands"
        name="autosBrands"
        defaultValue="hide"
        onChange={searchByBrand}
        >
        <option value="hide">Enter the text</option>
        {autosBrands.map((autosBrand) => (
          <option key={nanoid()} value={autosBrand}>
            {autosBrand}
          </option>
        ))}
      </select>
    </>
  );
};
export default SearchSelectBrands;

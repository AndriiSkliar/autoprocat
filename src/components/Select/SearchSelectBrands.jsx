import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAutosBrands } from '../../redux/autos/autos.operations.js';
import { selectAutos, selectAutosBrands } from '../../redux/selectors/autos.selectors.js';
import { nanoid } from 'nanoid'

const SearchSelectBrands = ({setAutosBrands}) => {
  const dispatch = useDispatch();
  const autosBrands = useSelector(selectAutosBrands);
   const autos = useSelector(selectAutos);

  useEffect(() => {
    if(autos.length === 0) dispatch(fetchAutosBrands());
  }, [dispatch, autos.length]);

  const searchByBrand = (e) => {
    e.preventDefault();
    const brandParam = e.target.value !== 'hide' ? e.target.value : '';
    setAutosBrands(brandParam);
  }

  return (
    <>
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

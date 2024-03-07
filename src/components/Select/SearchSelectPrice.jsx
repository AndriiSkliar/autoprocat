const SearchSelectPrice = ({ setAutosPrice }) => {

  const searchByPrice = (e) => {
    e.preventDefault();
    const priceParam = e.target.value !== 'hide' ? e.target.value : '';
    setAutosPrice(priceParam);
  };

  return (
    <>
      <select
      id="autosPrice"
      name="autosPrice"
      defaultValue="hide"
      onChange={searchByPrice}
    >
      <option value="hide">To $</option>
      {[30, 40, 50, 60, 70, 80, 90, 100].map((price) => (
        <option key={price} value={price}>{price}</option>
      ))}
    </select>
    </>
  );
};
export default SearchSelectPrice;

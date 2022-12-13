import '../styles/components/FilterByName.scss';
function FilterByName(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleSearch(ev.target.value.toLowerCase());
  };
  return (
    <div className="nameFilter">
      <label htmlFor="name" className="nameFilter__search">
        Search
      </label>
      <input
        type="text"
        name="name"
        className="nameFilter__input"
        id="name"
        onInput={handleInput}
        value={props.searchByName}
      />
    </div>
  );
}
export default FilterByName;

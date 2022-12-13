function FilterByName(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleSearch(ev.target.value.toLowerCase());
  };
  return (
    <div className="form__text">
      <label htmlFor="name">Search</label>
      <input
        type="text"
        name="name"
        className=""
        id="name"
        onInput={handleInput}
        value={props.searchByName}
      />
    </div>
  );
}
export default FilterByName;

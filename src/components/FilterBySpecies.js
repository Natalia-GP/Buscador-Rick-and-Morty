function FilterBySpecies(props) {
  const handleInput = (ev) => {
    props.handleSpecies(ev.target.value);
  };

  return (
    <div className="form__select">
      <label className="">Species</label>
      <select
        name="species"
        id="species"
        className=""
        value={props.searchBySpecies}
        onChange={handleInput}
      >
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="todos">All</option>
      </select>
    </div>
  );
}
export default FilterBySpecies;

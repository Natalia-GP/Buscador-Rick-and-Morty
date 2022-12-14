import '../styles/components/FilterBySpecies.scss';

function FilterBySpecies(props) {
  const handleInput = (ev) => {
    props.handleSpecies(ev.target.value);
  };

  return (
    <div className="species">
      <label className="species__name">Species</label>
      <select
        name="species"
        id="species"
        className="species__select"
        value={props.searchBySpecies}
        onChange={handleInput}
      >
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="">All</option>
      </select>
    </div>
  );
}
export default FilterBySpecies;

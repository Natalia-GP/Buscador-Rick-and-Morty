import '../styles/components/FilterByStatus.scss';

function FilterByStatus(props) {
  const handleInput = (ev) => {
    props.handleStatus(ev.target.value);
  };

  return (
    <div className="status">
      <label className="status__name">Status</label>
      <select
        name="status"
        id="status"
        className="status__select"
        value={props.searchByStatus}
        onChange={handleInput}
      >
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
}

export default FilterByStatus;

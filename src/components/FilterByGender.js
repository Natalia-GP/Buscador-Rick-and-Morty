import '../styles/components/FilterByGender.scss';
function FilterByGender(props) {
  const handleInput = (ev) => {
    props.handleGender(ev.target.value);
  };

  return (
    <div className="genderFilter">
      <label htmlFor='name' className='genderFilter__gender'>Gender</label>
      <select
        name="gender"
        id="gender"
        value={props.searchByGender}
        onChange={handleInput}
      >
        <option value="Female">Famele</option>
        <option value="Male">Male</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
}

export default FilterByGender;

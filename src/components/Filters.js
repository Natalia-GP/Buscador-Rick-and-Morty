import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import FilterByGender from './FilterByGender';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterByName
          searchByName={props.searchByName}
          handleSearch={props.handleSearch}
        />
        <FilterBySpecies
          searchBySpecies={props.searchBySpecies}
          handleSpecies={props.handleSpecies}
          species={props.species}
        />
        <FilterByStatus
          serchByStatus={props.serchByStatus}
          handleStatus={props.handleStatus}
          status={props.status}
        />
        <FilterByGender
          searchByGender={props.searchByGender}
          handleGender={props.handleGender}
          gender={props.gender}
        />
      </form>
    </section>
  );
}
export default Filters;

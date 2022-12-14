import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';

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
      </form>
    </section>
  );
}
export default Filters;

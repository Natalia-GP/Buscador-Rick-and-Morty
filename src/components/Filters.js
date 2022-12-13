import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

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
      </form>
    </section>
  );
}
export default Filters;

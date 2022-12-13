import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, searchByName }) => {
  const renderList = () => {
    if (characters.length !== 0) {
      return characters.map((character) => {
        return <CharacterCard character={character} key={character.id} />;
      });
    } else {
      return (
        <p className="errorMasagge">
          There is no charecter with {searchByName}.Try again
        </p>
      );
    }
  };
  return (
    <section className="sectionCharacter">
      <ul className="sectionCharacter__card">{renderList()}</ul>
    </section>
  );
};
export default CharacterList;

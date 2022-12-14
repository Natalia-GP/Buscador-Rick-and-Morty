import CharacterCard from './CharacterCard';

const CharacterList = ({ characters, searchByName }) => {
  const renderList = () => {
    if (characters.length !== 0) {
      return characters.map((character) => {
        return <CharacterCard character={character} key={character.id} />;
      });
    } else {
      return (
        <p className="errorMsg">
          There is no character with{' '}
          <span className="errorMsg__name">{searchByName} </span>.Try again
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

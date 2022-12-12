import { Link } from 'react-router-dom';
const CharacterCard = ({ character }) => {
  return (
    <li key={character.id}>
      <Link to={`/CharacterDetail/${character.id}`}>
        <article id={character.id}>
          <img src={character.img} alt={`Character ${character.name}`}></img>
          <h2>Name: {character.name}</h2>
          <p>Species: {character.species}</p>
        </article>
      </Link>
    </li>
  );
};
export default CharacterCard;

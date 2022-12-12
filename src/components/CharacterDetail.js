import { Link } from 'react-router-dom';
const CharacterDetail = ({ character }) => {
  return (
    <section>
      <article id={character.id}>
        <img src={character.img} alt={`Foto de ${character.name}`} />
        <h2>{character.name}</h2>
        <p>Specie: {character.species}</p>
        <ul>
          <li>Origin:{character.origin}</li>
          <li>Status:{character.status}</li>
          <li>Number of episodes:{character.episodes}</li>
        </ul>
      </article>
      <Link to={'/'}>Back to top</Link>
    </section>
  );
};
export default CharacterDetail;

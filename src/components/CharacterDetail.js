import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function CharacterDetail(props) {
  const params = useParams();
  const characterFound = props.findCharacter(params.characterId);
  return (
    <>
      <section>
        <article id={characterFound.id}>
          <img
            src={characterFound.img}
            alt={`Foto de ${characterFound.name}`}
            title={`Foto de ${characterFound.name}`}
          />
          <h2>Name: {characterFound.name}</h2>
          <p>Specie: {characterFound.species}</p>
          <ul>
            <li>Origin:{characterFound.origin}</li>
            <li>Status:{characterFound.status}</li>
            <li>Number of episodes:{characterFound.episodes}</li>
          </ul>
        </article>
        <Link to={'/'}>Back to top</Link>
      </section>
    </>
  );
}
export default CharacterDetail;

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const CharacterDetail = ({ character }) => {
  const { id } = useParams();
  const searchCaracter = character.find((each) => each.id === parseInt(id));
  return (
    <section>
      <article id={searchCaracter.id}>
        <img src={searchCaracter.img} alt={`Foto de ${searchCaracter.name}`} />
        <h2>{searchCaracter.name}</h2>
        <p>Specie: {searchCaracter.species}</p>
        <ul>
          <li>Origin:{searchCaracter.origin}</li>
          <li>Status:{searchCaracter.status}</li>
          <li>Number of episodes:{searchCaracter.episodes}</li>
        </ul>
      </article>
      <Link to={'/'}>Back to top</Link>
    </section>
  );
};
export default CharacterDetail;

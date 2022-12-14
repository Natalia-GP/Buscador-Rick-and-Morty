import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';

const CharacterDetail = (props) => {
  const params = useParams();
  const characterFound = props.findCharacter(params.id);

  return (
    <>
      <section className="detail">
        <article id={characterFound.id} className="detail__article">
          <img
            className="detail__img"
            src={characterFound.img}
            alt={`Foto de ${characterFound.name}`}
            title={`Foto de ${characterFound.name}`}
          />
          <h2 className="detail__name">Name: {characterFound.name}</h2>
          <p className="detail__specie"> Specie: {characterFound.species}</p>
          <ul className="detail__list">
            <li className="detail__list--origin">
              Origin:{characterFound.origin}
            </li>
            <li className="detail__list--status">
              Status:{characterFound.status}
            </li>
            <li className="detail__list--number">
              Number of episodes:{characterFound.episodes}
            </li>
          </ul>
        </article>
        <Link to={'/'} className="toTop">
          Back to top
        </Link>
      </section>
    </>
  );
};
export default CharacterDetail;

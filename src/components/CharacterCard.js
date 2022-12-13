import { Link } from 'react-router-dom';
function CharacterCard(props) {
  return (
    <li key={props.character.id} className="card">
      <Link to={`/CharacterDetail/${props.character.id}`}>
        <article className="card__item" id={props.character.id}>
          <img
            className="card__item--img"
            src={props.character.img}
            alt={`Character ${props.character.name}`}
          ></img>
          <h2 className="card__item--name">Name: {props.character.name}</h2>
          <p className="card__item--species">
            Species: {props.character.species}
          </p>
        </article>
      </Link>
    </li>
  );
}
export default CharacterCard;

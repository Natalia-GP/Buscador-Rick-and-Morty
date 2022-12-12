import { Link } from 'react-router-dom';
function CharacterCard(props) {
  return (
    <li key={props.character.id} className="card">
      <Link to={`/CharacterDetail/${props.character.id}`}>
        <article id={props.character.id}>
          <img
            src={props.character.img}
            alt={`Character ${props.character.name}`}
          ></img>
          <h2>Name: {props.character.name}</h2>
          <p>Species: {props.character.species}</p>
        </article>
      </Link>
    </li>
  );
}
export default CharacterCard;

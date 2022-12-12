import { useEffect, useState } from 'react';
import '../styles/App.scss';
//SERVICES
import callToApi from '../services/api';

//COMPONENTS
import CharacterList from './CharacterList';
import Filters from './Filters';

//ROUTES
//import { Routes, Route } from 'react-router-dom';

function App() {
  // VARIABLES ESTADO
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSeachByName] = useState('');

  // USEEFFECT

  useEffect(() => {
    callToApi().then((data) => {
      setCharacters(data); //VE que se modifica con data
    });
  }, []);

  //FUNCIONES ROUTER
  // FUNCIONES HANDLER
  const handleSearch = (value) => {
    setSeachByName(value);
  };
  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const filteredCharacters = characters.filter((character) => {
    //filtrar array
    if (searchByName !== '') {
      return character.name.toLowerCase().includes(searchByName);
    } else {
      return true;
    }
  });
  // HTML EN EL RETURN

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      <Filters handleSearch={handleSearch} />
      <CharacterList characters={filteredCharacters} />
    </div>
    //CharacterDatail en Routes
  );
}

export default App;

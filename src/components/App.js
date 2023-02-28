import callToApi from '../services/api';

import { useEffect, useState } from 'react';
import '../styles/App.scss';
// import ls from '../services/localStorage';

//COMPONENTS
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
//ROUTES
import { Routes, Route } from 'react-router-dom';

function App() {
  // VARIABLES ESTADO
  //los personajes de la serie sacados de la Api
  const [characters, setCharacters] = useState([]);

  //filterByName
  const [searchByName, setSearchByName] = useState('');
  //filterByspecies
  const [searchBySpecies, setSearchBySpecies] = useState('');

  const [searchByStatus, setsearchByStatus] = useState('');
  const [searchByGender, setsearchByGender] = useState('');
  // USEEFFECT
  //API
  useEffect(() => {
    callToApi().then((data) => {
      console.log(data);
      setCharacters(data); //VE que se modifica con data
    });
  }, []);

  //FUNCIONES ROUTER

  // FUNCIONES HANDLER
  //filterByName
  const handleSearch = (value) => {
    setSearchByName(value);
  };
  //filterBySpecies
  const handleSpecies = (value) => {
    setSearchBySpecies(value);
  };
  const handleStatus = (value) => {
    setsearchByStatus(value);
  };
  const handleGender = (value) => {
    setsearchByGender(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const findCharacter = (value) => {
    return characters.find(
      (character) => parseInt(character.id) === parseInt(value)
    );
  };
  const filteredCharacters = () => {
    return characters
      .filter((character) =>
        character.name.toLowerCase().includes(searchByName.toLowerCase())
      )
      .filter((character) =>
        searchBySpecies === ''
          ? true
          : character.species.toLowerCase() === searchBySpecies.toLowerCase()
      )
      .filter((character) =>
        searchByStatus === ''
          ? true
          : character.status.toLowerCase() === searchByStatus.toLowerCase()
      )
      .filter((characters) =>
        searchByGender === '' ? true : characters.gender === searchByGender
      );
  };

  // HTML EN EL RETURN

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleSearch={handleSearch}
                searchByName={searchByName}
                searchBySpecies={searchBySpecies}
                handleSpecies={handleSpecies}
                handleStatus={handleStatus}
                searchByStatus={searchByStatus}
                handleGender={handleGender}
                searchByGender={searchByGender}
              />
              <CharacterList
                characters={filteredCharacters()}
                searchByName={searchByName}
              />
            </>
          }
        />
        <Route
          path="/CharacterDetail/:id"
          element={<CharacterDetail findCharacter={findCharacter} />}
        />
      </Routes>
    </>
  );
}

export default App;

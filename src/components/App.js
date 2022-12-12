import callToApi from '../services/api';

import { useEffect, useState } from 'react';
import '../styles/App.scss';
// import ls from '../services/localStorage';

//COMPONENTS
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
//ROUTES
import { Routes, Route } from 'react-router-dom';

function App() {
  // VARIABLES ESTADO
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSeachByName] = useState('');

  // USEEFFECT
  //API
  useEffect(() => {
    callToApi().then((cleanData) => {
      console.log(cleanData);
      setCharacters(cleanData); //VE que se modifica con data
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

    return character.name.toLowerCase().includes(searchByName.toLowerCase());
  });
  // HTML EN EL RETURN

  return (
    <>
      <h1>Rick & Morty</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleSearch={handleSearch}
                searchByName={searchByName}
              />
              <CharacterList characters={filteredCharacters} />
            </>
          }
        />
        <Route
          path="/CharacterDetail/:id"
          element={<CharacterDetail characters={filteredCharacters} />}
        />
      </Routes>
    </>
  );
}

export default App;

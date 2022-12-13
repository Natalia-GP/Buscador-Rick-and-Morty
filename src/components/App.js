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
import Header from './Header';

function App() {
  // VARIABLES ESTADO
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSearchByName] = useState('');

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
    setSearchByName(value);
  };
  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const filteredCharacters = characters.filter((character) => {
    //filtrar array
    return character.name.toLowerCase().includes(searchByName.toLowerCase());
  });
  // HTML EN EL RETURN

  return (
    <>
      <Header></Header>
      <h1>Characters</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleSearch={handleSearch}
                searchByName={searchByName}
              />
              <CharacterList
                characters={filteredCharacters}
                searchByName={searchByName}
              />
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

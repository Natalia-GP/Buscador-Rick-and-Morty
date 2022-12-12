const callToApi = () => {
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((response) => {
      const cleanData = response.results.map((character) => {
        return {
          id: character.id,
          img: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          status: character.status,
          episodes: character.episode.length,
        };
      });
      return cleanData;
    });
};
export default callToApi;
//cambiar por 'https://rickandmortyapi.com/api/character?'

const callToApi = () => {
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          img: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          status: character.status,
          episodes: character.episode.length,
          gender: character.gender,
        };
      });
      return cleanData;
    });
};
export default callToApi;

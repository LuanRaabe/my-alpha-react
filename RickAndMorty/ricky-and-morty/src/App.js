import React, { useEffect, useState } from "react";
import Card from './components/Card';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let allChars = [];
      for (let i = 1; i < 8; i++) {
        const reponse = await fetch(
          'https://rickandmortyapi.com/api/character/?page=' + i,
        );
        const data = await reponse.json();
        allChars = allChars.concat(data.results);
      }
      setCharacters(allChars);
    })();
    setLoading(false);
  }, []);

  if (loading) {
    return <div id="loading">Loading...</div>;
  }

  return (
    <div id="app">
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <ul>
          {characters.map((character) => (
           <Card key={character.id} props={character} />
          ))}
        </ul>
      </main>
    </div>
  );
}
export default App;

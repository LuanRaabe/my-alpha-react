import React, { useEffect, useState } from "react";
import getCharacters from "./modules/getCharacters";
import Card from './components/Card';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const allChars = await getCharacters();
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

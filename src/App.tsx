import { useEffect, useState } from "react";
import "./App.css";
import PokeCard from "./components/PokeCard";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((pokemon_data) => <PokeCard pokemon={pokemon_data} />)
      )}
    </>
  );
}

export default App;

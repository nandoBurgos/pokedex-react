type Pokemon = {
  name: string;
  url: string;
};

type PokeCardProps = {
  pokemon: Pokemon;
};

export default function PokeCard({ pokemon }: PokeCardProps) {
  fetch(pokemon.url)
    .then((response) => response.json())
    .then((data) => {
      pokemon.image = data.sprites.front_default;
      pokemon.type = data.types[0].type.name;
      pokemon.height = data.height;
      pokemon.weight = data.weight;
    })
    .catch((error) => console.error("Error fetching pokemon data:", error));

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">{pokemon.name}</h2>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700">Type: {pokemon.type}</p>
        <p className="text-gray-700">Height: {pokemon.height}</p>
        <p className="text-gray-700">Weight: {pokemon.weight}</p>
      </div>
    </>
  );
}

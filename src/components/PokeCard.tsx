import { useState } from "react";

type Pokemon = {
  name: string;
  url: string;
};

type PokeCardProps = {
  pokemon: Pokemon;
};

export default function PokeCard({ pokemon }: PokeCardProps) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  fetch(pokemon.url)
    .then((response) => response.json())
    .then((data) => {
      setName(pokemon.name);
      setImage(data.sprites.other.dream_world.front_default);
      setType(data.types[0].type.name);
      setHeight(data.height);
      setWeight(data.weight);
    })
    .catch((error) => console.error("Error fetching pokemon data:", error));

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-700">Type: {type}</p>
        <p className="text-gray-700">Height: {height}</p>
        <p className="text-gray-700">Weight: {weight}</p>
      </div>
    </>
  );
}

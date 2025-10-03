'use client';

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

interface PokemonItemProps {
  pokemon: Pokemon;
  onClick: () => void;
  clickCount: number;
}

export const PokemonItem = ({ pokemon, onClick, clickCount }: PokemonItemProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 text-left"
    >
      <div className="flex items-center gap-4">
        <img
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
          className="w-20 h-20"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold capitalize text-gray-800">
            {pokemon.name}
          </h3>
          <p className="text-sm text-gray-600">
            #{pokemon.id}
          </p>
          <div className="mt-2">
            <span className="text-xs font-semibold text-gray-500">
              Altura:
            </span>{' '}
            <span className="text-sm text-gray-700">
              {pokemon.height / 10}m
            </span>
            {' | '}
            <span className="text-xs font-semibold text-gray-500">
              Peso:
            </span>{' '}
            <span className="text-sm text-gray-700">
              {pokemon.weight / 10}kg
            </span>
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {pokemon.types?.map((type) => (
              <span
                key={type.slot}
                className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {clickCount}
          </div>
          <div className="text-xs text-gray-500">
            clicks
          </div>
        </div>
      </div>
    </button>
  );
};
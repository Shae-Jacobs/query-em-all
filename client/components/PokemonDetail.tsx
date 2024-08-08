import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName } from '../apis/pokemon.ts'
import LoadingSpinner from './LoadingSpinner.tsx'

export default function PokemonDetail() {
  const { name } = useParams()
  const {
    data: pokemon,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['pokemonByName', name],
    queryFn: () => fetchPokemonByName(name as string),
  })

  if (isError) {
    return <p>error: {error.message}</p>
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!pokemon) {
    return (
      <div id="missing-content">
        <img
          id="missing"
          src="https://i.ytimg.com/vi/qnqnf2qQXFE/hqdefault.jpg"
          alt="missing"
        />
      </div>
    )
  }
  console.log(pokemon)
  return (
    <div id="pokemon">
      <div id="pokemon-card">
        <div id="pokeball-background">
          <img
            id="pokemonSprite"
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt="pokemon sprite front"
          />
        </div>
        <div id="pokemon-info">
          <h1>{pokemon.name}</h1>
          <h2>Types</h2>
          {pokemon.types.map(({ type, slot }) => (
            <p key={slot}>{type.name}</p>
          ))}
          <h2>Weight: {pokemon.weight / 10}kg</h2>
          <h2>Height: {pokemon.height * 10}cm</h2>
          <div id="abilities">
            <h2>Abilities</h2>
            {pokemon.abilities.map(({ ability, slot }) => (
              <p key={slot}>{ability.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
console.log(PokemonDetail)

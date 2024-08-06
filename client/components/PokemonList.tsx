import { useQuery } from '@tanstack/react-query'
import { fetchPokemonGeneration } from '../apis/pokemon.ts'
import LoadingSpinner from './LoadingSpinner.tsx'
import { Link } from 'react-router-dom'
export default function PokemonList() {
  const {
    data: generation,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['pokemonGen'],
    queryFn: () => fetchPokemonGeneration(1),
  })
  if (isPending) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <h2>Pokémon in {generation.main_region.name}:</h2>
      <ul>
        {generation.pokemon_species.map((p) => (
          <li key={p.url}>
            <Link to={`/pokemon/${p.name.toLowerCase()}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

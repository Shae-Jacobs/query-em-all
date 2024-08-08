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
      <div>
        <h1 id="heading1">Pokémon in {generation.main_region.name}:</h1>
      </div>
      <section id="pokemonList">
        <ul id="pokemonList">
          {generation.pokemon_species.map((p) => (
            <li key={p.url}>
              <Link
                to={`/pokemon/${p.name.toLowerCase()}`}
                className="block-link"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

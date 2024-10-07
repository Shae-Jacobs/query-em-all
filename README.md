# Query 'Em All

Practice writing queries with React Query and displaying loading states, error states, and data. We will be using the [Pokémon API](https://pokeapi.co).

## Setup

### 0. Cloning and installation

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  ```sh
  cd query-em-all
  npm i
  npm run dev
  ```

  </details>
### 1. Setting up React Query

- [ ] Install React Query and React Query Devtools

```sh
npm i -D @tanstack/react-query @tanstack/react-query-devtools
```

-  In `client/index.tsx` import `{ QueryClient, QueryClientProvider }` from `@tanstack/react-query`

-  In `client/index.tsx` import `{ ReactQueryDevtools }` from `@tanstack/react-query-devtools`

-  Create a new `QueryClient` instance and wrap the `<RouterProvider />` component in a `<QueryClientProvider>` component, passing the `QueryClient` instance as a prop

-  Within the `QueryClient` instance, add in the `<ReactQueryDevtools />` component.

  <details style="padding-left: 2em">
    <summary>Tip</summary>

  ```tsx
  // creating a new QueryClient instance
  const queryClient = new QueryClient()

  // ...

  root.render(
    // wrapping the app in a QueryClientProvider
    // and passing the QueryClient instance as a prop
    // Adding ReactQueryDevtools
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
  ```

  </details>

---

## Challenges

### 1. Fetching a list of Pokémon from the API
### 2. Adding a loading state
### 3. Adding an error state
### 4. Fetching a single Pokémon
### 5. Adding more data to `<PokemonDetail>`
## This challenge can be used for the following trello assessment(s):

- **WD02: Build a Javascript application that consumes a restful JSON API**

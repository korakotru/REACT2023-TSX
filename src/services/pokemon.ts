import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => ({ url: `pokemon/${name}`, method: 'get' }) ,
    }),
    getPokemonAll: builder.query({
      query: () => ({ url: `pokemon/`, method: 'get' }) ,
    }),
  }),
})

// Export hooks for usage in functional components
// วิธีการตั้งชื่อ hook คือ use + GetPokemonByName + Query = useGetPokemonByNameQuery
export const { useGetPokemonByNameQuery, useGetPokemonAllQuery  } = pokemonApi 
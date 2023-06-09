import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Pokemon } from "./Pokemon";
import { useState, useEffect } from "react";
import { useGetPokemonAllQuery } from "./services/pokemon";
import { useGetJokeQuery } from "./services/joke";

// const pokemon = ["bulbasaur", "pikachu", "ditto", "bulbasaur"];

function App() {
  const [pollingInterval, setPollingInterval] = useState(0);
  // const [pokemon, setPokemon] = useState([])

  // const { data, error, isLoading, isFetching } = useGetPokemonAllQuery({
  //   pollingInterval,
  // });

  const {data, error, isLoading, isFetching} = useGetJokeQuery()

  return (
    <React.Fragment>
      <div className="App">
        <select
          onChange={(ele) => setPollingInterval(Number(ele.target.value))}
        >
          <option value={0}>Off</option>
          <option value={1000}>1s</option>
          <option value={5000}>5s</option>
        </select>
        <div>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <><h1>Retrieving Pokemon Gang...</h1></>
          ) : data ? (
            // data.results.map((pokemon: any, index: number) => (
            //   <Pokemon
            //     key={pokemon.name}
            //     name={pokemon.name}
            //     pollingInterval={pollingInterval}
            //   />
            // ))
            <h1> {data.value}</h1>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;

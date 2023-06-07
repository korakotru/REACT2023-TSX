// import { useCallback, useMemo } from "react";
import { useGetPokemonByNameQuery } from "./services/pokemon";

  const Pokemon = ({
  name,
  pollingInterval,
}: {
  name: string;
  pollingInterval: number;
}) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(
    name,
    {
      pollingInterval,
    }
  );

  const showPokeDetail = (name: string): void => {
    alert("poke name : " + name);
  };

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>
            {data.species.name} {isFetching ? "..." : ""}
          </h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
          <button
            onClick={() => {
              showPokeDetail(data.name);
            }}
          >
            more..
          </button>
        </>
      ) : null}
    </>
  );
};

export {Pokemon}
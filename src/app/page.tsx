"use client";
import { useState } from "react";
import { useGames } from "./hooks/useGames";

import Table from "./components/Table";
import TestMap from "./components/TestMap";

export default function Home() {
  const [isTable, setIsTable] = useState(false);
  const [data, search, setSearch, isPending] = useGames("ALex");
  
  return <TestMap />;

  return (
    <main>
      <h1>List of games: </h1>

      <label htmlFor="search">Game</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <label htmlFor="View">View</label>
      <button onClick={() => setIsTable(!isTable)}>
        {isTable ? "JSON" : "Table"}
      </button>
      {isPending && <span>Loading...</span>}
      {!isPending && isTable ? (
        <Table data={data} />
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </main>
  );
}

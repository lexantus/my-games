import { useEffect, useState } from "react";

export function useGames(defaultSearch) {
  const [isPending, setIsPending] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState(defaultSearch);
  const [data, setData] = useState([]);

  useEffect(() => {
    const baseUrl = "https://api.rawg.io/api";
    const key = "0e523b73155a4e43857661ba768b0fc6";
    const params = new URLSearchParams([
      ["key", key],
      ["page", 1],
      ["page_size", 1000],
      ["search", search],
      ["search_precise", false],
      ["search_exact", false],
    ]);
    const url = `${baseUrl}/games?${params.toString()}`;

    setIsPending(true);
    setIsLoaded(false);

    fetch(url)
      .then((res) => {
        setIsPending(false);
        setIsLoaded(true);
        console.log(res);
        return res;
      })
      .then((res) => res.json())
      .then((json) => setData(json.results))
      .catch((err) => console.info(err));
  }, [search]);

  return [data, search, setSearch, isPending];
}

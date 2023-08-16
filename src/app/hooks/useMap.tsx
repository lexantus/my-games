import { useState, useCallback } from "react";

export function useMap(initialValue) {
  const [map, setMap] = useState(new Map(initialValue));

  const set = useCallback((key, value) => {
    const newMap = new Map(map);
    newMap.set(key, value);
    setMap(newMap);
  }, []);

  const del = useCallback((key) => {
    const newMap = new Map(map);
    newMap.delete(key);
    setMap(newMap);
  }, []);

  const clear = useCallback(() => {
    const newMap = new Map(map);
    newMap.clear();
    setMap(newMap);
  }, []);

  return {
    map,
    set,
    delete: del,
    clear
  };
}

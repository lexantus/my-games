import { useState } from "react";
import { useMap } from "../hooks/useMap";

export default function TestMap() {
  const {
    map,
    set,
    delete: del,
    clear,
  } = useMap([
    ["hello", 1],
    ["world", 2],
  ]);

  const [keyToDelete, setKeyToDelete] = useState("");

  return (
    <div>
      <input
        type="text"
        value={keyToDelete}
        onChange={(e) => setKeyToDelete(e.target.value)}
      />
      <button onClick={() => del(keyToDelete)}>Delete</button>

      <hr />

      <button>Clear</button>

      <div>
        Map: {JSON.stringify(Array.from(map))}
      </div>
    </div>
  );
}

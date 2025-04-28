import React, { useEffect, useState } from "react";

export default function CounterEffect() {
  const [value, setValue] = useState(0);

  useEffect(
    function () {
      document.title = `Icreamented ${value}`;
    },
    [value]
  );
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click</button>
    </div>
  );
}

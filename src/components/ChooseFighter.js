import React from "react";

export default function ChooseFighter({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <p>{pokemon.id}</p>
      <p>{pokemon.name.english}</p>
    </>
  );
}

// ablums.map((o) => {
//   const name = `app_${o.name}`;
//   return (
//     <div key={o.id} className="album-item">
//       <div className="album-item-name">{name}</div>
//     </div>
//   );
// });

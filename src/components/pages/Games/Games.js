import React, { useState, useEffect } from "react";
import GameName from "./GameName/GameName";

const API = "https://mcasino.supersport.hr/api/games";

function Games() {
  const [brandsTree, setBrandsTree] = useState({ brands: [] });

  // fetch data
  function fetchGames() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        data.brands.forEach((brand) => {
          // get the first letter of brand
          const firstLetter = brand.name[0];
          // filter first letter
          const brandWithStartingLetter = brandsTree.brands.filter(
            (brand) => brand.firstLetter === firstLetter
          );

          // push the first letter of each brand only once
          if (brandWithStartingLetter.length > 0) {
            brandWithStartingLetter[0].games.push({
              name: brand.name,
              id: brand.id,
            });
            return;
          }
          // push first letter and all the games of that letter
          brandsTree.brands.push({
            firstLetter,
            games: [{ name: brand.name, id: brand.id }],
          });
        });

        setBrandsTree(brandsTree);
      });
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      {brandsTree.brands
        // first sort all games alphabetically
        .sort(function (a, b) {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        })
        .map((brand) => (
          <div className="game">
            <h1 key={brand.firstLetter} id="firstLetter">
              {brand.firstLetter.toUpperCase()}
            </h1>
            <div>
              {brand.games.map(({ id, name }) => (
                <GameName keyId={id} gameName={name} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Games;

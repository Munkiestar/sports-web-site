import React from "react";

import "./GameName.scss";

function GameName({ gameName, keyId }) {
  return (
    <div className="gameName">
      <h1 key={keyId}>{gameName}</h1>
    </div>
  );
}

export default GameName;

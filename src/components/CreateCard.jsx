import React from "react";
import Card from "./Card";

function CreatCard(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
      emoji={emojipedia.emoji}
    />
  );
}

export default CreatCard;

import React from "react";
import emojipedia from "../emojipedia";
import CreatCard from "./CreateCard";

function Entry() {
  return <dl className="dictionary">{emojipedia.map(CreatCard)}</dl>;
}

export default Entry;

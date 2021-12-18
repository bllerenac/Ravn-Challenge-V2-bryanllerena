import React from "react";
import './styles.css'

function CharacterCard({ character_name, character_specie, character_planet, onClick}){
  return(
    <button className="character_card" onClick={onClick}>
      <div>
        <h2>{character_name}</h2>
        <h3>{character_specie ? character_specie.name:'Human'} from {character_planet.name}</h3>
      </div>
    </button>
  )
}

export default CharacterCard
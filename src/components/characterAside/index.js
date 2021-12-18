import React from "react";
import CharacterCard from "../characterCard";
import ChargeAnimation from "../chargeAnimation";
import './styles.css'

function CharacterAside({character_data, loading, error, setState}){
  if(loading) return <aside className="character_aside"><ChargeAnimation/></aside>
  if(error) return <aside className="character_aside"><p className="data_error">Failed to Load Data</p></aside>
  console.log(character_data.allPeople.people)
  return(
    <aside className="character_aside">
      {character_data.allPeople.people.map((element, index)=> {
        return(
         <>
          <CharacterCard
          key={index}
          character_name={element.name}
          character_specie={element.species}
          character_planet={element.homeworld}
          onClick={() => setState(element)}/>
          <div className="asider_divisor"/>
        </>
        )
      })}
    </aside>
  )
}

export default CharacterAside
import React from "react";
import './styles.css'

function CharacterDescription({character_data}){
  return(
    <div className="character_description">
      <div>
        <h2>General Information</h2>
        <div className="description_card">
          <h2>Eye Color</h2>
          <p>{character_data.eyeColor}</p>
        </div>
        <div className="asider_divisor"/>
        <div className="description_card">
          <h2>Hair Color</h2>
          <p>{character_data.hairColor}</p>
        </div>
        <div className="asider_divisor"/>
        <div className="description_card">
          <h2>Skin Color</h2>
          <p>{character_data.skinColor}</p>
        </div>
        <div className="asider_divisor"/>
        <div className="description_card">
          <h2>Birth Year</h2>
          <p>{character_data.birthYear}</p>
        </div>
        <div className="asider_divisor"/>
      </div>
      {character_data.vehicleConnection.vehicles.length !==0 
        && <div>
        <h2>Vehicles</h2>
        {character_data.vehicleConnection.vehicles.map((element, index)=>(
          <div className="vehicle_card">
            <h2>{element.name}</h2>
            <div className="asider_divisor"/>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default CharacterDescription
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
//components
import CharacterAside from '../../components/characterAside'
import CharacterDescription from "../../components/characterDescription";
import './styles.css'

const CharacterInfo = gql`
    query GetIndexCharacters {
      allPeople {
        people {
          id
          name
          birthYear
          eyeColor
          gender
          hairColor
          height
          mass
          skinColor
          species {
            id
            name
          }
          homeworld {
            id
            name
          }
          vehicleConnection {
            vehicles {
              id
              name
            }
          }
        }
      }
    }
    `

function Home() {
  const [ description, setDescription ] = useState(false)
  const { loading, error, data } = useQuery(CharacterInfo);
  console.log(data)
  return(
    <div>
      <div className="header">
        <h2>Ravn Star Wars Registry</h2>
      </div>
      <div className="home_view">
        <CharacterAside 
          character_data={data}
          loading={loading}
          error={error}
          setState={setDescription}/>
        {description 
          ? <CharacterDescription character_data={description} />
          :<div className="description_empty">
            <h2>Select a Character</h2>
          </div>}
      </div>
    </div>
  )
}

export default Home
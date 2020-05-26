import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const Paragraph = styled.p`
    line-height: 50px;
    width: 500px;
    height: 50px;
    text-align: center;
    
    margin: 20px auto;
    font-size: 24px;
    background-color:rgba(219, 219, 219, 0.7);
`;



export default function App() {
  const [characters, setCharacters] = useState([]);
  
  console.log(characters)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
      
    axios.get('https://swapi.py4e.com/api/people')
      .then(res => setCharacters(res.data.results))

      .catch(err => console.log(err));
  }, []);

  console.log(characters)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const Character = (props) => {
    return (
      <div>
        {props.info.name}
      </div>
    )
  }


  return (
    <div className="App">
      <h1>Star Wars Characters:</h1>
      <h1> {characters.map((person, index) =>  {return <Paragraph>{person.name} has a height of {person.height} cm </Paragraph>})} </h1>
      
      
    </div>
  );
}


import './App.css';
import UserInput from './UserComponents/UserInput';
import UserOutput from './UserComponents/UserOutput';
import React, { useState } from 'react'
function App() {
  const [usernameState, setUsernameState] = useState ({
    username: "Talon"
  });

  const [abilityState, setAbilityState] = useState ({
    ability: "Noxian Diplomacy"
  });

  const changeUsernameHandler = (event) => {
    setUsernameState( {
      username: event.target.value
    })
  }

  const changeAbilityHandler = (event) => {
    setAbilityState({
      ability: event.target.value
    })
  }
  
  const style = {
    backgroundColor: '#eee'
  }
  return (
    <div className="App">
      <UserInput  style={style} changed={changeUsernameHandler} currentName={usernameState.username}></UserInput>
      <UserOutput username={usernameState.username} ability={abilityState.ability}></UserOutput>
      <UserOutput username="User1"></UserOutput>
      <UserOutput username={usernameState.username} ></UserOutput>
      <UserInput  style={style} changed={changeAbilityHandler} currentAbility={abilityState.ability}></UserInput>
    </div>
  );
}

export default App;

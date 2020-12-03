import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ValidatorComponent from './ValidatorComponent';
import CharComponent from './CharComponent';

function App() {
  const [userInputState, setUserInputState] = useState( {
    userInput: ''
  });
  const lengthChangedListener = (event) => {
    setUserInputState( {
      userInput: event.target.value
    });
  }

  const deleteCharHandler = (index) => {
    const chars = userInputState.userInput.split('')
    chars.splice(index, 1);
    setUserInputState( {
      userInput: chars.join('')
    })
  }
  const charList = userInputState.userInput.split('').map((char, index) => {
    return <CharComponent char={char} key={index} click={() => deleteCharHandler(index)}/>
  });

  return (
    <div className="App">
      <input type="text" 
        onChange={lengthChangedListener} 
        value={userInputState.userInput}/>
      <p>{userInputState.userInput.length}</p>
      <ValidatorComponent length={userInputState.userInput.length}></ValidatorComponent>
      {charList}
    </div>
  );
}

export default App;

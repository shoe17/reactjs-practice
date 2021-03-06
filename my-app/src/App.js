import React, { useState } from 'react';
import Person from './Person/Person';
import classes from './App.module.css';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'asdf', name: "Darian", age: 22},
      { id: 'zxcv', name: "Dion", age: 27},
      { id: 'qwer', name: "Who", age: 100}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');
  const [showPersonsState, setShowPersonsState] = useState(false)

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...personsState.persons[personIndex]
    };

    //const person = Object.assign({}, personsState.persons[personIndex]);


    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person;
    setPersonsState({
      persons: persons
    });
  }

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  const deletePersonHandler = (personIndex) => {
    //const persons = personsState.persons.slice();
    const persons = [...personsState.persons]
    persons.splice(personIndex, 1);
    console.log(persons);
    console.log(personIndex);
    setPersonsState({
      persons: persons
    })
    console.log("deleting");
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState;
    setShowPersonsState(
      showPersonsState => !showPersonsState
    )
  }
  let persons = null;

  if (showPersonsState) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person 
            click={() => deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => nameChangeHandler(event, person.id)}/>
        })}
      </div>
    );

    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
    
  }

  const assignedClasses = [];
  if (personsState.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (personsState.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This app really works!</p>
      <button
        className={classes.Button}
        alt={showPersonsState}
        onClick={togglePersonsHandler}>
          Toggle Show
      </button>
      {persons}
    </div>
  );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;
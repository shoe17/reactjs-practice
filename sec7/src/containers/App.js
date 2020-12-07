import React, { useState } from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
        <Persons 
          persons={personsState.persons}
          clicked={deletePersonHandler} 
          changed={nameChangeHandler}
        />
    );
  }


  return (
    <div className={classes.App}>
      <Cockpit
        showPersons={showPersonsState}
        persons={personsState.persons}
        clicked={togglePersonsHandler}
      />
      {persons}
    </div>
  );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;
// import React from 'react';
import './Person.module.css';
import classes from './Person.module.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

const Person = (props) => {
    return (
        <Aux>
            <AuthContext.Consumer>
                {(context) => 
                    {context.authenticated ? <p>Authenticated</p> : <p>Please login!</p>}
                }
            </AuthContext.Consumer>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input
                type="text" 
                //ref={(inputEl) => {inputElement = inputEl}}
                onChange={props.changed}
                value={props.name}/>
        </Aux>
    )
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
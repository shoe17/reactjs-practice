import classes from './Cockpit.module.css'
import React, {useEffect, useRef, useContext} from 'react'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('saved data');
        // }, 1000);
        toggleBtnRef.current.click();
        return() => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2 useEffect');
        return() => {
            console.log('[Cockpit.js] 2 cleanup work in useEffect');
        }
    })
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This app really works!</p>
            <button
                className={btnClass}
                ref={toggleBtnRef}
                onClick={props.clicked}>
                Toggle Show
            </button>
            <button onClick={authContext.login}>Login</button> 
        </div>
    );
}

export default React.memo(Cockpit);
const userInput = (props) => {
    return (
        <div>
            <input style={props.style} type="text" onChange={props.changed} value={props.currentName}/>
        </div>
    )
}

export default userInput;
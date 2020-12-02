const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                My username is {props.username}.
            </p>
            <p>
                My ability is {props.ability}.
            </p>
        </div>
    )
}

export default userOutput;
function Welcome (props) {
    return(
        <p>Welcome, {props.name}!</p>
    )
}

Welcome.defaultProps={          
    name:'Betania'
}

 //MEMO:DEFAULTPROPS è UNA PAROLA CHIAVE

export default Welcome;
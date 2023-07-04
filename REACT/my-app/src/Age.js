function Age(props) {
    if(props.age > 18) {
        return <p>Your age is {props.age}</p>;
    } else {
        return <p>You are very young!</p>
    }
}

export default Age;

function Age(props) {
  return <p>Your age is {props.age}</p>;
}

function Welcome(props) {
    const renderCondition = props.age > 18 && props.age < 65;
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      {renderCondition && <Age age={props.age}/>}
    </div>
  );
}

//all'interno del return non puoi mettere più di una condizione, quindi le metti all'esterno del return

export default Welcome;

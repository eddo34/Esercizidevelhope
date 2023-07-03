function Age(props) {
  return <p>Your age is {props.age}</p>;
}

function Welcome(props) {
    const renderCondition = props.name == 'John' && props.age > 18 && props.age < 65 ;
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      {renderCondition && <Age age={props.age}/>}
    </div>
  );
}


export default Welcome;

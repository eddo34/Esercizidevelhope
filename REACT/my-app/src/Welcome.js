import Age from "./Age.js";

function Welcome(props) {
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      <Age age={props.age}/>
    </div>
  );
}

export default Welcome;

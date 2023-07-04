import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello.js";
import Message from "./Message.js";
import Welcome from "./Welcome.js";
import Counter from "./Counter.js";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name="John" age={2}/>
      <Counter start={0} amount={1} interval={1000} count={0}/>
    </div>
  );
}

//in JSX i numeri vanno incapsulati nelle graffe  
//all'interno delle graffe ci sta il jsx, puoi mettere tag html mischiati a js

export default App;

import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello.js";
import Message from "./Message.js";
import ClickCounter from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <InteractiveWelcome />
      <ClickCounter />
    </div>
  );
}

//in JSX i numeri vanno incapsulati nelle graffe  
//all'interno delle graffe ci sta il jsx, puoi mettere tag html mischiati a js

export default App;

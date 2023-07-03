import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello.js";
import Message from "./Message.js";
import Welcome from "./Welcome.js";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name="John" age={2}/>
    </div>
  );
}


//all'interno delle graffe ci sta il jsx, puoi mettere tag html mischiati a js

export default App;

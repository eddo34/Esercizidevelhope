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
      <Welcome age={24}/>
    </div>
  );
}

//SE DOPO WELCOME SPECIFICHI NAME="ALTRO-NOME" , NELL'APP SOSTITUISCE QUELLO IMPOSTATO CON IL DEFAULTPROPS

export default App;

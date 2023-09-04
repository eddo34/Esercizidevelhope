
import "./App.css";
import Hello from "./Hello.js";
import Message from "./Message.js";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <GithubUser username="eddo34"/>
      <GithubUserList />
    </div>
  );
}

//in JSX i numeri vanno incapsulati nelle graffe  
//all'interno delle graffe ci sta il jsx, puoi mettere tag html mischiati a js

export default App;

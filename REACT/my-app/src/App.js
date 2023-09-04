import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello.js";
import Message from "./Message.js";
import ClickCounter from "./ClickTracker";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState('En');

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <Hello />
      <Message />
      <div>
        <select onChange={handleChangeLanguage} value={language}>
          <option value="En">English</option>
          <option value="It">Italian</option>
          <option value="Jap">Japanese</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>

    </div>
  );
}

//in JSX i numeri vanno incapsulati nelle graffe  
//all'interno delle graffe ci sta il jsx, puoi mettere tag html mischiati a js

export default App;

import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Message from './Message.js';
import Welcome from './Welcome.js';

function App() {
  return (
    <div>
      <Hello/>
      <Message/>
      <Welcome name='Eddo'/>
    </div>
  );
}

export default App;

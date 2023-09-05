
import "./App.css";
import Hello from "./Hello.js";
import Message from "./Message.js";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import CarDetails from "./CarDetails";
import FilteredList from "./FilteredList";

const list = [
  {
      name: 'Eren',
      id: '1',
      age: 15,
  },
  {
      name: 'Aldo',
      id: '2',
      age: 47,
  },
  {
      name: 'Giovanni',
      id: '3',
      age: 25,
  },
]


const carData = {
  model: 'Swift',
  year: '2016',
  color: 'grey'
}

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <GithubUser username="eddo34"/>
      <GithubUserList />
      <CarDetails initialData={carData} />
      <FilteredList list={list} />
    </div>
  );
}

//in JSX i numeri vanno incapsulati nelle graffe  
//all'interno delle graffe ci sta il jsx, puoi mettere tag html mischiati a js

export default App;

import { useState, useEffect } from "react";

import "./style/App.css";

import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const fetchdata = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setMonsters(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [])

  
  useEffect(() => {
     const newMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField) );
     setFilteredMonsters(newMonsters);
  }, [monsters, searchField]);

  
  const search = e => setSearchField(e.target.value.toLowerCase());

  return (
    <div className="App">
      <SearchBox
        onChangeHandler={search}
        placeholder="search monsters"
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};



export default App;

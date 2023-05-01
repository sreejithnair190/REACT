import { Component } from "react";
import "./style/App.css";

import CardList from "./components/cardList";
import SearchBox from "./components/searchBox";

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField : ''
    };
  }

  search = e => this.setState({searchField : e.target.value.toLowerCase()}) 

  async componentDidMount() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response .json();
      this.setState({monsters:data});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {monsters, searchField } = this.state;
    const { search } = this;

    const filteredMonster = monsters.filter( monster => monster.name.toLowerCase().includes(searchField) );

    return (
      <div className="App">
        <SearchBox 
          onChangeHandler = {search}
          placeholder = 'search monsters'
          className = 'monster-search-box'
        />
        <CardList 
          monsters = {filteredMonster}
        />
      </div>
    );
  }
}

export default App;

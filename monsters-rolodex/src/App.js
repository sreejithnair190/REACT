import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name:{
        fname:"Sreejith",
        lname:"Nair"
      }
    }
  }
 
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.fname} {this.state.name.lname}
          </p>
          <button onClick={ () => {
              this.setState({
                name:{fname:'Nair',lname:"Sreejith"}
              });
              console.log(this.state.name);
            }
          }>Change Name</button>
        </header>
      </div>
    );
  }
  
}

export default App;

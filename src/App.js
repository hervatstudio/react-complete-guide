import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import AddName from './Person/AddName';
import { statement } from '@babel/template';

class App extends Component {
  state = {
      persons:[
        {name:'Max', age:28, id: 1},
        {name:'Manu', age:29, id: 2},
        {name:'Stephanie', age:26, id: 3}
      ],
      otherState: 'Some other value',
      showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  

  
  



  render() {

    let persons = null;

    if( this.state.showPersons){
      persons = (
        <Person persons={this.state.persons} deletePersonHandler={this.deletePersonHandler}></Person>
      )
    }


    return ( 
      <div className="App">
      <button onClick={this.togglePersonsHandler}>Toggle</button>
        <div>
            {persons}
        </div>
    </div>
    );
  }
}

export default App;



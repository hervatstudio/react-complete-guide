import React, { Component } from 'react';


class Person extends Component {
    state = { }
    render() {
        console.log(this.props.persons);
        const persons = this.props.persons;

        const personList = persons.length ? (
            persons.map((person, index) => {
                return(
                <div key={person.id}>
                    <p onClick={this.deletePersonHandler(index)}>I'm  {person.name}, And my Age is {person.age}</p>
                </div>
                )
            })
        ) : (
            <p>No data</p>
        )

        
        return (
            <div>
                {personList}
                <p>{this.props.children}</p>
            </div>
         );
    }
}
 
export default Person;
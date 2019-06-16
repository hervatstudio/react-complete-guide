import React, { Component } from 'react';

class AddName extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <input onChange={this.props.addName} id="addName" type="text" value={this.props.name}/>
                <button onClick={this.props.addName}>Add name</button>
            </div>
         );
    }
}
 
export default AddName;
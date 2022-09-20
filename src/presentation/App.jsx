import React, { Component } from "react"

import Todo from "../domain/index.ts"

console.log(new Todo())

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;

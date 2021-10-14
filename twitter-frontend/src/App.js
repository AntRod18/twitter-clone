import './App.css';
import React from "react"
import Sidebar from './Sidebar';

class App extends React.Component {
  render(){
  return (
    <div className="app">
      <h1> Yo Yo</h1>

      <Sidebar />

      {/* {Feed} */}

      {/* {Widgets} */}
    </div>
  );
  }
}

export default App;

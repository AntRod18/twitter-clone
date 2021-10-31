import './App.css';
import React from "react"
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

class App extends React.Component {
  render(){
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
  }
}

export default App;

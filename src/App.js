import React, {useState} from 'react';
import NameForm from "./NameForm";
import About from "./About";
import Topics from "./Topics";
import Thanks from "./Thanks";
import './App.css';
import './Grid.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {

  const [namer, setNamer] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    setNamer(e.target.value);
  }

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" children={<NameForm handleChange={(e)=>handleChange(e)}/>} />
          <Route path="/thanks" children={<Thanks namer= {namer}/>}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

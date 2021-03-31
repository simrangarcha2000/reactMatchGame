import React, {useState} from 'react';
import NameForm from "./NameForm";
import useForm from './components/useForm';
import validateInfo from './validateInfo';
import About from "./About";
import Topics from "./Topics";
import Thanks from "./Thanks";
import FormSuccess from './components/FormSuccess';
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
          <Route path="/useForm" component={useForm}/>
          <Route path="/validate" component={validateInfo}/>
          <Route path="/FormSuccess" component={FormSuccess}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

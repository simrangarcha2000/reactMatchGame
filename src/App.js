import React, {useState} from 'react';
import NameForm from "./routes/NameForm";
import useForm from './routes/useForm';
import validateInfo from './routes/validateInfo';
import About from "./routes/About";
import Topics from "./routes/Topics";
import Thanks from "./routes/Thanks";
import FormSuccess from './routes/FormSuccess';
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

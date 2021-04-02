import React, { useState } from "react";
import NameForm from "./routes/NameForm";
import About from "./routes/About";
import Topics from "./routes/Topics";
import Thanks from "./routes/Thanks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "./Grid.css";
import Game from "./routes/Game";
import Home from "./routes/Home";

function App() {
    const [namer, setNamer] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setNamer(e.target.value);
    };

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        children={
                            <NameForm handleChange={(e) => handleChange(e)} />
                        }
                    />
                    <Route path="/thanks" children={<Thanks namer={namer} />} />
                    <Route path="/thanks" children={<Thanks namer={namer} />} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/game" component={Game} />
                    <Route path="/home" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

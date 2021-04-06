import React, { useState } from "react";
import NameForm from "./routes/NameForm";
import About from "./routes/About";
import Topics from "./routes/Topics";
import Thanks from "./routes/Thanks";
import WinPage from "./routes/WinPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "./Grid.css";
import Game from "./routes/Game";
import Home from "./routes/Home";
import LegalPage from "./routes/LegalPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    const [namer, setNamer] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setNamer(e.target.value);
    };

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            children={
                                <NameForm
                                    handleChange={(e) => handleChange(e)}
                                />
                            }
                        />
                        <Route
                            path="/thanks"
                            children={<Thanks namer={namer} />}
                        />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                        <Route path="/game" component={Game} />
                        <Route path="/home" component={Home} />
                        <Route path="/legal" component={LegalPage} />
                        <Route path="/WinPage" component={WinPage} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

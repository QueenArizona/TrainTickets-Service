import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./components/main/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <main className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

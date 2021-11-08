import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/main/HomePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

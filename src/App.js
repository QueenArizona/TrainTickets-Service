import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./components/main/HomePage";
import OrderPage from "./components/main/OrderPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/order" component={OrderPage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

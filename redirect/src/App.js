import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
  
function App() {


  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
        
          <Route exact path="/" component={Home} />
         
          <Route path="/about" component={About} />
            
          <Route path="/contactus" component={ContactUs} />
           
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;

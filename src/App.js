import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import PrivateRoute from './utils/PrivateRoute'
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <h1>App.js placeholder</h1>
      <Router>
      <div className="App">
        <PrivateRoute path='/homepage' component={Homepage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
    </div>
  );
}

export default App;

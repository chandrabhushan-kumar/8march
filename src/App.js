import React from 'react';
import { Route, Switch,BrowserRouter as Router} from "react-router-dom";
import Users from "./Compnents/Users.js";
import Contact from "./Compnents/Contact.js";
 import About from "./Compnents/About.js";


function App() {
  return (
    <div className="App">
      <Router> 
          <Switch>
         
           <Route  exact path="/" component={About} /> 
           <Route exact path="/users" component={Users} /> 
           <Route exact path="/contact" component={Contact} /> 
           </Switch>
          
       
      </Router>
    </div>
  );
}
export default App;



// import React from 'react'
// import "./App.css";
// import form from './form'





// const App = () => {
//   return (
//     <div>
//      <h1>hi</h1>
//      <form />
        
//     </div>
//   )
// }

 

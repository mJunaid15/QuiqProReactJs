import { Route, Switch } from "react-router";
import Login from './pages/Login';
import Creditbuying from './pages/Creditbuying';
import Index from './pages/Index';
import Customerdashboard from './pages/Customerdashboard';
import Profileview from './pages/Profileview';
import Profileedit from './pages/Profileedit';
import Completeproject from './pages/Completeproject';
import Completesinglepageview from './pages/Completesinglepageview';









function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/login" component={Login}></Route>  
        <Route exact path="/credit" component={Creditbuying}></Route> 
        <Route exact path="/customerdashboard" component={Customerdashboard}></Route>  
        <Route exact path="/profileview" component={Profileview}></Route>  
        <Route exact path="/profileedit" component={Profileedit}></Route>  
        <Route exact path="/completeproject" component={Completeproject}></Route>  
        <Route exact path="/completesinglepageview" component={Completesinglepageview}></Route>  


        <Route  component={Error}></Route>
      </Switch>
  </>

    
  
   
  
  );
}

export default App;

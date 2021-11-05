import { Route, Switch } from "react-router";
import Login from './pages/Login';
import Creditbuying from './pages/Creditbuying';
import Index from './pages/Index';
import Customerdashboard from './pages/Customerdashboard';
import Profileview from './pages/Profileview';
import Profileedit from './pages/Profileedit';
import Completeproject from './pages/Completeproject';
import Completesinglepageview from './pages/Completesinglepageview';
import Profileprofessional from './pages/Profileprofessional';
import Findprofessional from './pages/Findprofessional';
import Postedprojectsingle from './pages/Postedprojectsingle';
import Postedviewwithsingleproposal from './pages/Postedviewwithsingleproposal';
import Postajob from './pages/Postajob';
import Messagechat from './pages/Messagechat';












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
        <Route exact path="/profileprofessional" component={Profileprofessional}></Route>  
        <Route exact path="/findprofessional" component={Findprofessional}></Route>  
        <Route exact path="/postedprojectsingle" component={Postedprojectsingle}></Route>  
        <Route exact path="/postedviewwithsingleproposal" component={Postedviewwithsingleproposal}></Route> 
        <Route exact path="/postajob" component={Postajob}></Route>  
        <Route exact path="/messagechat" component={Messagechat}></Route>  





        <Route  component={Error}></Route>
      </Switch>
  </>

    
  
   
  
  );
}

export default App;

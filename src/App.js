import { Route, Switch } from "react-router";
import Login from "./pages/Login";
import Creditbuying from "./pages/Creditbuying";
import Index from "./pages/Index";
import Customerdashboard from "./pages/Customerdashboard";
import Profileview from "./pages/Profileview";
import Profileedit from "./pages/Profileedit";
import Completeproject from "./pages/Completeproject";
import Completesinglepageview from "./pages/Completesinglepageview";
import Profileprofessional from "./pages/Profileprofessional";
import Findprofessional from "./pages/Findprofessional";
import Postedprojectsingle from "./pages/Postedprojectsingle";
import Postedviewwithsingleproposal from "./pages/Postedviewwithsingleproposal";
import Postajob from "./pages/Postajob";
import Messagechat from "./pages/Messagechat";
import Forgotpass from "./pages/Forgotpass";
import Profileeditbadge from "./pages/Profileeditbadge";
import Profileeditsupport from "./pages/Profileeditsupport";
import Profileeditsuportlist from "./pages/Profileeditsuportlist";
import Profileeditsuportlistticket from "./pages/Profileeditsuportlistticket";
import Postedprojectsingleviewwithsinglepurposal from "./pages/Postedprojectsingleviewwithsinglepurposal";
import Resetnewpass from "./pages/Resetnewpass";
import Dashboard from "./admin dashboard/pages/Dashboard";
import Adminmanagmentlist from "./admin dashboard/pages/Adminmanagmentlist";
import Customermanagement from "./admin dashboard/pages/Customermanagement";
import Professionalmanagementlist from "./admin dashboard/pages/Professionalmanagementlist";
import Projectmanagementlist from "./admin dashboard/pages/Projectmanagementlist";
import Categorylist from "./admin dashboard/pages/Categorylist";
import Categorymanagementcreatecategory from "./admin dashboard/pages/Categorymanagementcreatecategory";
import Categorymanagementsubcategorylist from "./admin dashboard/pages/Categorymanagementsubcategorylist";
import Categorymanagementcreatesubcate from "./admin dashboard/pages/Categorymanagementcreatesubcate";
import Supportmanagementlisttickets from "./admin dashboard/pages/Supportmanagementlisttickets";




function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/credit" component={Creditbuying}></Route>
        <Route
          exact
          path="/customerdashboard"
          component={Customerdashboard}
        ></Route>
        <Route exact path="/profileview" component={Profileview}></Route>
        <Route exact path="/profileedit" component={Profileedit}></Route>
        <Route
          exact
          path="/completeproject"
          component={Completeproject}
        ></Route>
        <Route
          exact
          path="/completesinglepageview"
          component={Completesinglepageview}
        ></Route>
        <Route
          exact
          path="/profileprofessional"
          component={Profileprofessional}
        ></Route>
        <Route
          exact
          path="/findprofessional"
          component={Findprofessional}
        ></Route>
        <Route
          exact
          path="/postedprojectsingle"
          component={Postedprojectsingle}
        ></Route>
        <Route
          exact
          path="/postedviewwithsingleproposal"
          component={Postedviewwithsingleproposal}
        ></Route>
        <Route exact path="/postajob" component={Postajob}></Route>
        <Route exact path="/messagechat" component={Messagechat}></Route>
        <Route exact path="/forgotpass" component={Forgotpass}></Route>
        <Route
          exact
          path="/profileeditbadge"
          component={Profileeditbadge}
        ></Route>
        <Route
          exact
          path="/profileeditsupport"
          component={Profileeditsupport}
        ></Route>
        <Route
          exact
          path="/profileeditsuportlist"
          component={Profileeditsuportlist}
        ></Route>
        <Route
          exact
          path="/profileeditsuportlistticket"
          component={Profileeditsuportlistticket}
        ></Route>
        <Route
          exact
          path="/postedprojectsingleviewwithsinglepurposal"
          component={Postedprojectsingleviewwithsinglepurposal}
        ></Route>
        <Route exact path="/resetnewpass" component={Resetnewpass}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/adminmanagmentlist" component={Adminmanagmentlist}></Route>
        <Route exact path="/customermanagement" component={Customermanagement}></Route>
        <Route exact path="/professionalmanagementlist" component={Professionalmanagementlist}></Route>
        <Route exact path="/projectmanagementlist" component={Projectmanagementlist}></Route>
        <Route exact path="/categorylist" component={Categorylist}></Route>
        <Route exact path="/categorymanagementcreatecategory" component={Categorymanagementcreatecategory}></Route>
        <Route exact path="/categorymanagementsubcategorylist" component={Categorymanagementsubcategorylist}></Route>
        <Route exact path="/supportmanagementlisttickets" component={Supportmanagementlisttickets}></Route>


        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;

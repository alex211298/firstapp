import { Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const Routes = (props) => {
  debugger;
  return (
    <div>
      <Route path="/dialogs" render={() => <Dialogs
        dialogsPage={props.appState.dialogsPage}
        dispatch = {props.dispatch}/>} />
      <Route path="/profile" render={() => <Profile
        profilePage={props.appState.profilePage}
        dispatch = {props.dispatch}/>} />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
    </div>
  );
};
export default Routes;
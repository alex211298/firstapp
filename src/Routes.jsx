import { Route } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const Routes = () => {
  return (
    <div>
    <Route path="/dialogs" component={Dialogs} />
  <Route path="/profile" component={Profile} />
  <Route path="/news" component={News} />
  <Route path="/music" component={Music} />
  <Route path="/settings" component={Settings} />
    </div>
);
}
export default Routes;
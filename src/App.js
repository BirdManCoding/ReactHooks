import { Route, Switch } from "react-router-dom";
import MyUseState from "./useState/myUseState";
import MyUseStatePrev from "./useState/myUseStatePrev";
import MyUseStateObj from "./useState/myUseStateObj";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route to='/useState/obj-state' component={MyUseStateObj} />
        <Route to='/useState/prev-state' component={MyUseStatePrev} />
        <Route to='/useState' component={MyUseState} />
      </Switch>
    </div>
  );
}

export default App;

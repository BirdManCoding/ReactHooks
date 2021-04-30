import { Route, Switch } from "react-router-dom";

import MyUseState from "./useState/myUseState";
import MyUseStatePrev from "./useState/myUseStatePrev";
import MyUseStateObj from "./useState/myUseStateObj";

import MyUseEffect from "./useEffect/myUseEffect";
import MyUseEffectCleanup from "./useEffect/useEffectCleanup/myUseEffectCleanup";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/useState/obj-state' component={MyUseStateObj} exact />
        <Route path='/useState/prev-state' component={MyUseStatePrev} exact />
        <Route path='/useState' component={MyUseState} exact />
        <Route path='/useEffect/cleanup' component={MyUseEffectCleanup} exact />
        <Route path='/useEffect' component={MyUseEffect} exact />
      </Switch>
    </div>
  );
}

export default App;

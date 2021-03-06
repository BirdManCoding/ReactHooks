import { Route, Switch } from "react-router-dom";

import MyUseState from "./useState/myUseState";
import MyUseStatePrev from "./useState/myUseStatePrev";
import MyUseStateObj from "./useState/myUseStateObj";

import MyUseEffect from "./useEffect/myUseEffect";
import MyUseEffectCleanup from "./useEffect/useEffectCleanup/myUseEffectCleanup";
import MyUseContext from "./useContext/useContextOne/myUseContext";
import MyUseContextTwo from "./useContext/useContextTwo/myUseContext";
import MyReducer from "./useReducer/myReducer";
import MyUseReducer from "./useReducer/useReducerOne/myUseReducer";
import MyUseReducerTwo from "./useReducer/useReducerTwo/myUseReducerTwo";
import MyUseContextReducer from "./useContext_useReducer/useContextOne/myUseContextReducer";
import MyUseCallback from "./useCallback/myUseCallback";
import MyUseMemo from "./useMemo/myUseMemo";
import MyUseRef from "./useRef/myUseRef";
import MyUseRefTwo from "./useRef/myUseRefTwo";
import customHook from "./customHook/customHook";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/useState/obj-state' component={MyUseStateObj} exact />
        <Route path='/useState/prev-state' component={MyUseStatePrev} exact />
        <Route path='/useState' component={MyUseState} exact />
        <Route path='/useEffect/cleanup' component={MyUseEffectCleanup} exact />
        <Route path='/useEffect' component={MyUseEffect} exact />
        <Route path='/useContext/one' component={MyUseContext} exact />
        <Route path='/useContext/two' component={MyUseContextTwo} exact />
        <Route path='/reducer' component={MyReducer} exact />
        <Route path='/useReducer' component={MyUseReducer} exact />
        <Route path='/useReducer/two' component={MyUseReducerTwo} exact />
        <Route
          path='/useReducer/context'
          component={MyUseContextReducer}
          exact
        />
        <Route path='/useCallback' component={MyUseCallback} exact />
        <Route path='/useMemo' component={MyUseMemo} exact />
        <Route path='/useRef' component={MyUseRef} exact />
        <Route path='/useRef/two' component={MyUseRefTwo} exact />
        <Route path='/customHook' component={customHook} exact />
      </Switch>
    </div>
  );
}

export default App;

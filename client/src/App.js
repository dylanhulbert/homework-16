import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import { BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />  
     <div>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route> 
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route path="/saved/:id" children={<Detail />} />
          <Route>
            <Search />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import OrderReview from './Component/OrderReview/OrderReview';
import Inventory from './Component/Inventory/Inventory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
            <Route path="/home">
            <Shop />
          </Route>
            <Route path="/shop">
            <Shop />
          </Route>
            <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

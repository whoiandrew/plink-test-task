import React from "react";
import GoodList from "./components/goods/GoodList";
import OrderForm from "./components/orderForm/OrderForm";
import Summary from "./components/summary/Summary";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AnimatePresence>
          <Switch>
            <Route exact path="/goods" render={() => <GoodList />} />
            <Route exact path="/goods/order" render={() => <OrderForm />} />
            <Route
              exact
              path="/goods/order/summary"
              render={() => <Summary />}
            />
            <Route exact path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;

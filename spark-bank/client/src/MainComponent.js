import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Customers from "./views/Customers";
import Customer from "./views/Customer";
import Transactions from "./views/Transactions";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StepContext from "./Context/StepContext";
import Success from "./views/Success";
import About from "./views/About";

export default function Main() {
  return (
    <div>
      <StepContext>
        <Navbar />
        <Router>
          <Navbar transparent />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/customers/:id" component={Customer} />
          <Route exact path="/transactions" component={Transactions} />
          <Footer />
        </Router>
      </StepContext>
    </div>
  );
}

import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";

import ListDeliveries from "../pages/Deliveries/List";
import StoreDeliveries from "../pages/Deliveries/Store";

import StoreDeliverymen from "../pages/Deliverymen/Store";
import ListDeliverymen from "../pages/Deliverymen/List";

import ListProblems from "../pages/Problems/List";

import ListRecipients from "../pages/Recipients/List";
import StoreRecipients from "../pages/Recipients/Store";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} isPrivate={false} />

      <Route path="/deliveries" exact component={ListDeliveries} />
      <Route path="/deliveries/store" component={StoreDeliveries} />

      <Route path="/deliverymen" exact component={ListDeliverymen} />
      <Route path="/deliverymen/store" component={StoreDeliverymen} />

      <Route path="/problems" component={ListProblems} />

      <Route path="/recipients" exact component={ListRecipients} />
      <Route path="/recipients/store" component={StoreRecipients} />
    </Switch>
  );
}

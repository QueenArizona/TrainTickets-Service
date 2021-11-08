import React from "react";
import { Switch, Route } from "react-router-dom";
import "./OrderPage.css";
import OrderIntro from "../intro/OrderIntro";
import OrderSidebar from "../sidebar/OrderSidebar";

function OrderPage(props) {
  return (
    <>
      <OrderIntro />
      <div className="order">
        <div className="wrapper">
          <div className="order__wrapper">
            <Switch>
              <Route path="/order/tickets" component={OrderSidebar} />
            </Switch>
            <Switch></Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;

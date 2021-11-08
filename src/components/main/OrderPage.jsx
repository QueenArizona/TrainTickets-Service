import React from "react";
import { Switch, Route } from "react-router-dom";
import "./OrderPage.css";
import OrderIntro from "../intro/OrderIntro";
import OrderSidebar from "../sidebar/OrderSidebar";
import DetailsSidebar from "../sidebar/DetailsSidebar";
import TrainSelect from "../tickets/TrainSelect";
import SeatsSelect from "../tickets/SeatsSelect";

function OrderPage(props) {
  return (
    <>
      <OrderIntro />
      <div className="order">
        <div className="wrapper">
          <div className="order__wrapper">
            <Switch>
              <Route path="/order/tickets" component={OrderSidebar} />
              <Route
                path={["/order/passengers", "/order/pay", "/order/verify"]}
                component={DetailsSidebar}
              />
            </Switch>
            <Switch>
              <Route path="/order/tickets/train" component={TrainSelect} />
              <Route path="/order/tickets/seats" component={SeatsSelect} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;

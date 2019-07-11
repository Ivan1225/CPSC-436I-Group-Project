import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function HelpPage() {
  return (
    <Router>
      <div>
        <ul>
     
          <li>
            <Link to="/ShippingDelivery">Shipping & Delivery</Link>
            
          </li>
               <li>
            <Link to="/">Return Policy</Link>
          </li>


          
            <li>
            <Link to="/ContactUs">Contact us</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/ShippingDelivery" component={ShippingDelivery} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h3>Wstore Return Policy
You may return any of the following items to Wstore, for any reason, for a full refund (we'll also refund the return shipping cost, if the return is a result of our error or if the item qualifies for Free Returns) within 30 days of delivery of your shipment (including gifts):

Any book in its original condition
Any unopened (still in its plastic wrap) CD, DVD, VHS tape, software, or video game
Unworn jewelry, watches, shoes, clothing and accessories (see "Returning Jewelry and Watches" and "Returning Shoes, Clothing & Accessories" below for more details)
You may return eligible baby items and toys to Wstore, for any reason, for a full refund (we'll also refund the return shipping cost, if the return is a result of our error) within 45 days of delivery of your shipment (including gifts). Also, most health and personal care items can be returned within 60 days of delivery (subject to the exclusions below).

Please note that we cannot accept the return of opened items, some health and personal care items, grocery items, or items returned more than 30 days past delivery (45 days for eligible baby items and toys; 60 days for eligible health and personal care items). We can only process returns and refunds for items purchased at Wstore.

If you ordered your item from an Wstore Marketplace seller, please see our Marketplace returns policy for more information about returning your order.</h3>
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <h2>Please send email to us or go to UBC computer science department to find Wstore members directly.</h2>
    </div>
  );
}

function ShippingDelivery({ match }) {
  return (
    <div>
      <h2>Shipping & Delivery</h2>
      <ul>
        <li>
          <Link to={`${match.url}/Your order will be shipped by the merchants or the courier companies, please contanct them directly`}>How to Track My Package?</Link>
        </li>
        <li>
          <Link to={`${match.url}/It depends on merchants or courier companies, normally on the business days.`}>Delivery Time</Link>
        </li>
        <li>
          <Link to={`${match.url}/Wait 36 hours - in rare cases, packages may say delivered up to 36 hours prior to arrival`}>Find a Missing Package That Shows as Delivered</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default HelpPage;


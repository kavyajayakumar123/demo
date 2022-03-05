import { BrowserRouter, Switch, Route } from "react-router-dom";
import Card from "./card";
import Footer from "./footer";
import Prodetails from "./prodetails";
import Head from "./head";
import Login from "./login";
import Main from "./main";
import Mostrecent from "./mostrecent";
import Profile from "./profile";
import "./style.css";
import Featuredproducts from "./featured";
import Latest from "./latestproducts";
import Offer from "./offer";
import Products from "./products";
import Buynow from "./buynow";



function App() {
  return (
    <>
      <Head />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
           <>
              <Main/>
              <br />
              <Mostrecent />
              <br />
              <br />
              <br />
              <br />
              <hr />
              <br />
              <Products/>
              <Featuredproducts/>
              <Latest/>
              <Offer/>
              <Footer />
            </>
            </Route>

          <Route exact path="/login">
              <Login/>
          </Route>

          <Route exact path="/profile">
              <Profile/>
          </Route>

          <Route exact path="/prodetails">
                <Prodetails/>
          </Route>

          <Route exact path="/card">
            <Card/>
      </Route>
       <Route exact path="/buynow">
            <Buynow/>
       </Route>
        </Switch>
      </BrowserRouter>
</>
  )
}
export default App;
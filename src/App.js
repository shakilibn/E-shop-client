import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn:false,
    name:'',
    email:''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/product/:productId">
            <CheckOut />           
          </PrivateRoute>
          
          <PrivateRoute path="/orders">
            <Orders />           
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin />           
          </PrivateRoute>

          <PrivateRoute path="/deals">
            <Deals />           
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route  path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

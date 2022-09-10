import React from 'react';
import Home from '../Pages/Home';
import Account from '../Pages/Account';
import Cart  from '../Pages/Cart';
import Catalog from '../Pages/Catalog';
import Checkout from '../Pages/Checkout';
import Product from '../Pages/Products';
import Shop from '../Pages/Shop';
import Contact from '../Pages/Contact';
import Login from '../Components/Login';
import Register from '../Components/Register';
import {Switch , Route} from 'react-router-dom';
import email_verified from '../Components/email_verified';
import ForgotPassword from '../Components/Forgotpassword'
const Routes = () => {
  return  (
  
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/catalog/:slug' exact component={Product}/>
          <Route path='/search/:name'  component={Catalog}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/login' component={Login}/>
          <Route path='/account' component={Account}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/register' component={Register}/>
          <Route path='/email_verified' component={email_verified}/>
          <Route path='/forgot_password' component={ForgotPassword}/>
      </Switch>
  )
}

export default Routes
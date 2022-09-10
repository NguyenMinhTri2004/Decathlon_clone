import React from 'react';
import { BrowserRouter , Route  } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from '../Routes/Routes';
import Coupon from './Coupon';

const Layout = () => {
   
  
   return (
       <BrowserRouter>
          <Route render = {props =>(
             <div>
                 
                  <Header {...props} />
                  <Coupon/>
                  <div className="container">
                      <div className="main">
                          <Routes/>
                      </div>

                  </div>
                  
                    {/* <Modal/> */}
                  <Footer/>
                       
             </div>     
          ) } />

          
       </BrowserRouter>
   ) 
}

export default Layout 
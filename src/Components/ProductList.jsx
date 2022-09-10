import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCart from './ProductCart'
import '../Sass/Components/_productlist.scss'
import {Link} from 'react-router-dom'
    

const ProductList = props => {
  

  return (
    <div className="ProductList">
     
     
      <div className="ProductList__type">
    
          <div className="ProductList__type__title">
             <h2>{props.title}</h2>
            <h1>{props.subtitle}</h1>

          </div>
 
          { <div className="ProductList__type__shadow">
             <h2>{props.title}</h2>
             <h1>{props.subtitle}</h1>

          </div>
          } 


       </div>  
          <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween= {10}
              slidesPerView= {4}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}

              breakpoints={{

                320 : {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },

                640: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },

                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
           >
       
                  {
                      props.item.map((item , index) => (
                        <SwiperSlide key={index}>
                          <Link to = {`/catalog/${item.slug}`} >
                            <ProductCart
                              img = {item.image}
                              price = {item.price}
                              name = {item.name}
                              rate = {item.rate}
                              discount = {item.discount}
                            />
                          </Link>
                      </SwiperSlide>
                    ))
                  }
         </Swiper>
      </div>

   
  );
  
}



export default ProductList


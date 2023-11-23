import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductCart = props => {
            
  return (
      <div className="product__cart">
           <div className="product__cart__top">
                   <div className="product__cart__top__main">
                   {
                          props.img && (
                                <Swiper
                                        // pagination = {true}
                                        className="control"
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        // onSlideChange={() => console.log('slide change')}
                                        // onSwiper={(swiper) => console.log(swiper)}
                                
                                        >
                
                                {
                                        props.img.map((item , index) => (
                                                <SwiperSlide key = {index} >
                                                        <div className="bg-prouduct-bg " >
                                                                <img src={item} ></img>
                                                        </div>
                                                </SwiperSlide>
                                        ))
                                }
                                </Swiper>
                          )   
                   }
                  
                   </div>

                   {
                              props?.img?.length > 1 && (
                                <div className="product__cart__top__sub">
                                {
                                                <Swiper
                                                className="control"
                                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                                spaceBetween={0}
                                                // slidesPerView={props.img.length}
                                                >
               
                                      {
                                                props.img.map((item , index) => (
                                                        <SwiperSlide  key = {index}>
                                                                <div  className="product__cart__top__sub__item  bg-prouduct-bg">
                                                                {
                                                                        <img src = {item} ></img>
                                                                }
                                                                </div>
                                                        
                                                        </SwiperSlide>
                                                ))
                                      }
               
                                       </Swiper>

                                }
                                </div>
                              ) 
                   }
                   
           </div>

           <div className="product__cart__bottom">
                  <div className="product__cart__bottom__wrapper">
                        <span className="product__cart__bottom__price">
                                {props.price} VNĐ
                        </span>

                        <div className="product__cart__bottom__name">
                                {props.name}
                        </div>

                        <div className="product__cart__bottom__rate">
                               

                                {
                                   props.rate ?
                                    (<span className="product__cart__bottom__rate__wrapper" >
                                      {props.rate}/5  <div className="product__cart__bottom__rate__wrapper__img"><img src = {require("../assets/Img/start.png")}></img></div> 
                                    </span> ) : ' '
                                }
                              
                                 
                        </div>
                  </div>
           </div>
      </div>
  )
}



export default ProductCart
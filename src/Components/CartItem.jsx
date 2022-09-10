import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteItem , updateItem} from '../Redux/shopping-cart/cartitemSlide'
import { useState } from 'react'
import numberWithCommas from '../utils/numberWithCommas'
import {BigLoading} from "./Loading"

const CartItem = props => {

  let cartItem = props.cartItem
      
  const dispatch = useDispatch()

  const [load , setLoad] = useState(false)

  const removeItem = () => {
      dispatch(deleteItem(cartItem))
  }

  const [quantity , setQuantity] = useState (props.cartItem.quantity)

  const changeQuantity = async (type) => {
      if(type === "PLUS"){
         await dispatch(updateItem({...cartItem, quantity: quantity + 1}))
         setQuantity(quantity + 1)
         
      }else {
         await dispatch(updateItem({...cartItem, quantity: quantity - 1 === 0 ? 1 : quantity - 1 }))
         quantity - 1 === 0 ? setQuantity(1) : setQuantity(quantity - 1)
        
      }
  }

//   useEffect(() => {
//       setQuantity(props.cartItem.quantity)
//   }, [props.cartItem ])
  
  return (
      <div className="cart__item">
          <div className="cart__item__wrapper">

           <div className="cart__item__img">
                <img src= {cartItem.image} alt="" />
           </div>

           <div className="cart__item__content">
               <div className="cart__item__content__top">
                  {cartItem.name}
                  <span onClick={removeItem}  >
                        <img src= {require("../assets/Img/deletecart.png")} alt="" />
                  </span>
               </div>

               <div className="cart__item__content__midle">
                   <div className="cart__item__content__midle__item">
                      
                          <strong>{cartItem.rate}</strong>
                          <div className="cart__item__content__midle__item__img">
                                <img src= {require("../assets/Img/start.png")} alt="" />
                          </div>
                     
                       
                   </div>

                   <div className="cart__item__content__midle__item">
                       Kích cỡ : <strong>L</strong>
                   </div>
               </div>

               <div className="cart__item__content__bottom">
                       <div className="cart__item__content__bottom__item">
                          Số lượng 
                          <div className="cart__item__content__bottom__item__quantity">
                              <span  onClick={() =>  changeQuantity("MINUS")} className="cart__item__content__bottom__item__quantity__minus">
                                         <i className='bx bx-minus'></i>
                              </span>

                               <span className="cart__item__content__bottom__item__quantity__input"   >
                                          {
                                            quantity
                                          }
                               </span>

                              <span onClick={() =>  changeQuantity("PLUS")}   className="cart__item__content__bottom__item__quantity__plus">
                                   <i className='bx bx-plus'></i>
                              </span>
                          </div>
                       </div>

                       <div className="cart__item__content__bottom__item">
                           <strong>{numberWithCommas(cartItem.price)} VNĐ</strong>
                      </div> 
             </div>
           </div>
          </div>
          {load && <BigLoading/>}
      </div>
  )
}



export default CartItem
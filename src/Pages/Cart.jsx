import React from 'react'
import CartItem from '../Components/CartItem'
import Button from '../Components/Button'
import {useSelector} from "react-redux"
import numberWithCommas from '../utils/numberWithCommas'
import Helmet from '../Components/Helmet'
import {useHistory} from "react-router-dom"
import { FetchCart } from '../Redux/shopping-cart/cartitemSlide'
import {useEffect , useState} from "react"
import {useDispatch} from "react-redux"
import {BigLoading} from "../Components/Loading"


const Cart = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const Gocheckout = () => {
    history.push("/checkout")
  }

  const currentUser = useSelector(state => state.auth.currentUser)

  let cartList  = useSelector(state => state.cartItems.value)

  cartList = cartList.slice().sort((a, b) => b.order - a.order)

  const sortItem = (arr) => arr.sort((a,b) => a.order > b.order ? 1 : (a.order < b.order ? -1 : 0))

  const cartItems = sortItem(cartList)

  const [load , setLoad] = useState(false)
  
  let sumquantity = 0

  cartItems.map(item => (
      sumquantity += item.quantity
  ))
  
  const cartToTal = cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0)
  
   useEffect( async  () => {
        if(currentUser){
          setLoad(true)
          await dispatch(FetchCart(currentUser.uid))     
          setLoad(false)
        }
   }, [])

  

  return (
    <Helmet title = {"Giỏ hàng"} >
     <div className="cart">
       <div className="cart__wrapper">
         <div className="cart__left">
              <div className="cart__left__address">
                   <p>Giao hàng đến <strong>Hồ Chí Minh Quận 1</strong> </p>
                   <span>THAY ĐỔI</span>
              </div>

               <div className="cart__left__endow">
                 <div className="cart__left__endow__wrapper">
                  <div className="cart__left__endow__item">
                     <div className="cart__left__endow__item__img1">
                           <img src = {require("../assets/Img/check.png")} alt="" />
                     </div>
                     <strong>Ưu đãi</strong>
                  </div>

                    <div className="cart__left__endow__item">
                      <div className="cart__left__endow__item__img2">
                            <img src= {require("../assets/Img/vanchuyencart.png")} alt="" />
                      </div>
                     <p>Mua thêm 774,001 VND để được MIỄN PHÍ GIAO HÀNG (Tối đa 100,000)</p>
                    </div>

                 </div>
               </div>

               <div className="cart__left__list">
                      {
                          cartItems
                          .map((item , index) => (
                              <div className="cart__left__list__item" key = {index}>
                                <CartItem cartItem={item}  />
                              </div>
                          ))
                      }
               </div>
              

               <div className="cart__left__trade">
                 <div className="cart__left__trade__wrapper">
                       <div className="cart__left__trade__security">
                         <div className="cart__left__trade__security__img">
                              <img src= {require("../assets/Img/carttrade.png")} alt="" />
                         </div>
                        <div className="cart__left__trade__security__content">
                                <strong>GIAO DỊCH AN TOÀN 100%</strong> 
                                Mã hóa SSL an toàn
                        </div>
                             
                       </div>

                       <div className="cart__left__trade__method">
                              <div className="cart__left__trade__method__item">
                                  <div className="cart__left__trade__method__item__img">
                                      <img src= {require("../assets/Img/credit.png")} alt="" />
                                  </div>    
                                  <div className="cart__left__trade__method__item__content">
                                          <p>
                                              CREDIT/DEBIT
                                              CARD
                                          </p>
                                         
                                  </div>
                              </div>

                              <div className="cart__left__trade__method__item">
                                   <div className="cart__left__trade__method__item__img">
                                        <img src= {require("../assets/Img/zalopay.png")} alt="" />
                                   </div> 
                                   <div className="cart__left__trade__method__item__content">
                                           <p>ZaloPay</p> 
                                  </div>
                              </div>

                              <div className="cart__left__trade__method__item">
                                <div className="cart__left__trade__method__item__img">
                                       <img src= {require("../assets/Img/cardon.png")} alt="" />
                                </div>   
                                <div className="cart__left__trade__method__item__content">
                                           <p>COD</p> 
                                  </div>
                              </div>
                       </div>

                 </div>
               </div>
         </div>

         <div className="cart__right">
             <div className="cart__right__bill">
                 <div className="cart__right__bill__top">
                     <div className="cart__right__bill__top__item">
                       <strong>Tóm tắt đơn hàng</strong>
                     </div>

                     <div className="cart__right__bill__top__item">
                        <p>Tạm tính</p>
                        <p>{numberWithCommas(cartToTal)} VND</p>
                     </div>

                     <div className="cart__right__bill__top__item">
                         <p>Phí giao hàng</p>
                         <p>Tính khi chọn hình thức giao hàng</p>
                     </div>
                 </div>

                 <div className="cart__right__bill__bottom">
                      <div className="cart__right__bill__bottom__item">
                           <strong>Tổng cộng</strong>
                           <strong>{numberWithCommas(cartToTal)} VND</strong>
                      </div>
                 </div>
             </div>
             <Button
               backgroundColor = {"yellow"}
               onClick = {() => Gocheckout()}
             >
                  TIẾP TỤC
             </Button>
             <div className="cart__right__service">
                   <div className="cart__right__service__item">
                      <div className="cart__right__service__item__img">
                            <img src= {require("../assets/Img/30ngay.png")} alt="" />
                      </div>
                        <p>30 ngày trả hàng</p>
                   </div>

                   <div className="cart__right__service__item">
                      <div className="cart__right__service__item__img">
                               <img src= {require("../assets/Img/vanchuyencart.png")} alt="" />
                      </div>
                         <p>Miễn phí Vận chuyển cho Đơn trên 899k (Tối đa 100k)</p>
                   </div>

                   <div className="cart__right__service__item">
                     <div className="cart__right__service__item__img">
                             <img src= {require("../assets/Img/baohanhcart.png")} alt="" />
                     </div> 
                         <p>Bảo hành 2 năm</p>
                   </div>
             </div>
             
             <div className="cart__right__coupon">
                <div className="cart__right__coupon__item">
                   <div className="cart__right__coupon__img">
                      <img src= {require("../assets/Img/cartcoupon.png")} alt="" />
                   </div>
                    <p>Áp dụng mã giảm giá</p>
                </div>
                   <div className="cart__right__coupon__item">
                          <i className='bx bx-chevron-right'></i>
                   </div>
                 
             </div>
         </div>
       </div>

       {load && <BigLoading/>}
     </div>
    </Helmet>
  )
}

export default Cart
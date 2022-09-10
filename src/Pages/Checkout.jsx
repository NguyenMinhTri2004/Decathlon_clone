import React from 'react'
import Helmet from '../Components/Helmet'
import Grid from '../Components/Grid'
import Checkbox from '../Components/Checkbox'
import numberWithCommas from '../utils/numberWithCommas'
import { useEffect , useState } from 'react'
import {useSelector , useDispatch} from "react-redux"
import { FetchCart } from '../Redux/shopping-cart/cartitemSlide'
import { addItem } from '../Redux/shopping-cart/checkoutitemSlice'
import {BigLoading} from "../Components/Loading"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Checkout = () => {
  
  const [tabactive , setTabActive] = useState(1)   
  
  const [hideship , setHideship] = useState(true )

  const [loading , setLoading] = useState(false)

  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.auth.currentUser)

  const cartItems  = useSelector(state => state.cartItems.value)

  const cartToTal = cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0)


  useEffect(  async () => {
      setLoading(true)
      await dispatch(FetchCart(currentUser.uid))
      setLoading(false)

  }, [])

  const test = async () => {
       setLoading(true)
       await dispatch(addItem(cartItems))
       setLoading(false)
       toast.success("Thanh toán thành công!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
           })
  }

  return (
    <Helmet title = "Checkout" >

           <div className="checkout">
              <div className="checkout__wrapper">

                        <div className = {`checkout__left ${tabactive == 1 ? "active" : ""} `} >
                              <h5>Địa chỉ</h5>
                              <p>Vui lòng nhập địa chỉ giao hàng và hóa đơn GTGT</p>

                              <Grid
                              col = {2}
                              mdCol = {2}
                              smCol = {1}
                              gap = {20}
                              >
                                

                                  <div className="checkout__left__address">
                                      <div className="checkout__left__address__item">
                                            <strong>Nhà riêng</strong>
                                            <span>CHỈNH SỬA</span>
                                            <span>THAY ĐỔI</span>
                                      </div>

                                      <div className="checkout__left__address__item">
                                            <p>TRI NGUYEN</p>
                                      </div>

                                      <div className="checkout__left__address__item">
                                            <p>Thuận Phước , Hải Châu, Đà Nẵng</p>
                                      </div>

                                      <div className="checkout__left__address__item">
                                            <p>0937543220</p>
                                      </div>
                                  </div>


                                      <div className="checkout__left__address__add">
                                            <span>THÊM ĐỊA CHỈ MỚI</span>
                                    </div>

                                      <div className="checkout__left__checkbox">
                                          <Checkbox/>
                                          <p>Xuất hóa đơn GTGT như địa chỉ giao hàng</p>
                                      </div>

                                      <span onClick={() => setTabActive(2)} className="checkout__left__button" >
                                          CHỌN HÌNH THỨC GIAO HÀNG
                                      </span>
                                        
                                      
                              </Grid>
                        </div>

                        <div className={`checkout__left ${tabactive == 2 ? "active" : ""} `} >
                              <div className="checkout__left__top">
                                    <div className="checkout__left__top__item">
                                          <p>Giao hàng đến <strong>Đà Nẵng Hải Châu</strong> </p> 
                                    </div>
                                    <div onClick={() => setTabActive(1)} className="checkout__left__top__item">
                                           <span>Thay đổi</span>
                                    </div>
                              </div>

                              <div className="checkout__left__bottom">
                                     <div className="checkout__left__bottom__item">
                                          <strong><p>Hình thức giao hàng phù hợp</p></strong> 
                                     </div>

                                     <div className="checkout__left__bottom__item">
                                            <p>Vui lòng chọn hình thức giao hàng</p>
                                     </div>

                                     <div className="checkout__left__bottom__item">
                                         <div className="checkout__left__bottom__item__wrapper">

                                           <div className="checkout__left__bottom__item__top">
                                                    <strong  >
                                                        <Checkbox
                                                           onChange={() => setHideship(!hideship)}
                                                        />
                                                        <p>Giao hàng tiêu chuẩn tại nhà</p>
                                                    </strong>

                                                    <span>
                                                        Từ Thứ bảy, 09/4
                                                    </span>

                                                    <span>Miễn phí</span>

                                           </div>

                                            <div className= {`checkout__left__bottom__item__bottom ${hideship ? "" : "active"}`}>

                                               
                                                      <div className="checkout__left__bottom__item__bottom__item">
                                                               <h4>GIAO HÀNG TẠI NHÀ</h4>
                                                               <h4>TỪ THỨ HAI, 11/04</h4>
                                                               <p>Giao hàng đến Hải Châu</p> 
                                                      </div>

                                                      <div onClick={() => setTabActive(3)} className="checkout__left__bottom__item__bottom__item">
                                                              <span>THANH TOÁN</span>
                                                      </div>
                                               
                                                   
                                            </div>
                                         </div>
                                     </div>

                                     <div className="checkout__left__bottom__item">
                                            <Checkbox/>
                                            <p>Tôi đã đọc và đồng ý với <span>Điều khoản và Điều kiện</span> </p>
                                     </div>
                              </div>
                            
                        </div>

                        <div className={`checkout__left ${tabactive == 3 ? "active" : ""} `} >
                              <div className="checkout__left__top">
                                    <div className="checkout__left__top__item">
                                          <p>Giao hàng đến <strong>Đà Nẵng Hải Châu</strong> </p> 
                                    </div>
                                    <div onClick={() => setTabActive(1)} className="checkout__left__top__item">
                                           <span>Thay đổi</span>
                                    </div>
                              </div>

                              <div className="checkout__left__top">
                                    <div className="checkout__left__top__item">
                                          <p>Giao hàng tiêu chuẩn tại nhà<strong> Từ Thứ hai, 11/04</strong> </p> 
                                    </div>
                                    <div onClick={() => setTabActive(2)} className="checkout__left__top__item">
                                           <span>Thay đổi</span>
                                    </div>
                              </div>

                              <div className="checkout__left__bottom">
                                     <div className="checkout__left__bottom__item">
                                          <strong><p>Các tùy chọn thanh toán có sẵn</p></strong> 
                                     </div>

                                     <div className="checkout__left__bottom__item">
                                            <p>Vui lòng chọn tùy chọn Thanh toán của bạn</p>
                                     </div>

                                     <div className="checkout__left__bottom__item">
                                         <div className="checkout__left__bottom__item__wrapper__checkbox">

                                              <div className="checkout__left__bottom__item__checkbox">
                                                   <Checkbox/>
                                                   <strong>Thanh toán khi nhận hàng</strong>
                                              </div>

                                              <div className="checkout__left__bottom__item__checkbox">
                                                    <Checkbox/>
                                                    <strong>Thanh toán online với thẻ ATM nội địa hoặc ví điện tử ZaloPay</strong>
                                              </div>

                                              <div className="checkout__left__bottom__item__checkbox">
                                                    <Checkbox/>
                                                    <strong>Thanh toán online với thẻ Credit/Debit (VISA hoặc Master)</strong>
                                             </div>          

                                             <div  onClick={() => test()}  className="checkout__left__bottom__item__button">
                                                     <span>THANH TOÁN</span>
                                             </div>

                                         </div>
                                     </div>

                                     
                              </div>
                            
                        </div>


                        <div className="checkout__right">
                              
                                <div className="cart__right__bill">
                                      
                                    <div className="cart__right__product">
                                          {
                                                cartItems.map((item , index) => (

                                                      <div className="cart__right__product__item" key = {index}>
                                                                  <div className="cart__right__product__item__img">
                                                                        <img src= {item.image} alt="" />
                                                                  </div>

                                                                  <div className="cart__right__product__item__content">
                                                                        <div className="cart__right__product__item__content__top">
                                                                                    <p className="cart__right__product__item__content__top__item">{item.name}</p>
                                                                        </div>

                                                                        <div className="cart__right__product__item__content__bottom">
                                                                                    
                                                                                    <p className="cart__right__product__item__content__bottom__item" ><span>Số lượng :</span> {item.quantity}</p> 
                                                                                    <p className="cart__right__product__item__content__bottom__item"><span>Giá:</span> <span>{numberWithCommas(item.price)} VND</span></p>  
                                                                        </div>
                                                                        
                                                                        
                                                                  </div>
                                                      </div>
                                                ))
                                          }  

                                    </div>

                                    <div className="cart__right__bill__top">
                                    
                                        <div className="cart__right__bill__top__item">
                                            <span>Phí giao hàng</span>
                                            <p>Tính khi chọn hình thức giao hàng</p>
                                        </div>

                                        <div className="cart__right__bill__top__item">
                                            <span>Tổng cộng</span>
                                            <p>{numberWithCommas(cartToTal)} VND</p>
                                        </div>

                                        {/* <div className="cart__right__bill__top__item">
                                            <p>CHI TIẾT</p>
                                        </div> */}
                                    </div>

                                  
                                </div>
                              
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
                                
                               
                        </div>
               </div>
               {loading && <BigLoading/>}
               <ToastContainer />
            </div>
           
      
    </Helmet>
  )
}

export default Checkout
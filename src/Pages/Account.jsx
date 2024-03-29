import React, { useEffect } from 'react'
import Helmet from '../Components/Helmet'
import Grid from '../Components/Grid'
import { useState } from 'react'
import {useDispatch , useSelector } from 'react-redux'
import { authLogout } from '../Redux/Auth/authSlide'
import { useHistory } from 'react-router-dom'
import { profileUpdate  , fetchProfile } from '../Redux/Profile/ProfileSlice'
import Addressmodal from '../Components/Addressmodal'
import {FetchAddress}  from '../Redux/Address/addressSlice'
import {deleteAddress , updateAddress} from '../Redux/Address/addressAction'
import {FetchCheckout} from '../Redux/shopping-cart/checkoutitemSlice'
import numberWithCommas from '../utils/numberWithCommas'
import {BigLoading} from "../Components/Loading"

const Account = () => {

    const [subrcise , setSubrcise] = useState(true)

    const [active , setActive] = useState(1)

    const {profile} = useSelector(state => state.profile)

    const dispatch = useDispatch()

    const initData = {
        phone: '',
        firstname : '',
        email : '',
        sex : '',
        middlename : '',
    }
 
    const [data , setData] = useState(initData)

    const [loading , setLoading] = useState(false)

    const checkoutlist = useSelector(state => state.checkoutItem.value)

    const currentUser = useSelector(state => state.auth.currentUser)
    
    const history = useHistory()


    const params = {
      user : currentUser,
      data
    }


    useEffect(() => {
      if(currentUser.uid){
        dispatch(FetchCheckout(currentUser.uid))
      }
    },[currentUser.uid])

  
    const Logout = () => {
      dispatch(authLogout())
      history.push("Login")
    }

  const handleSubmit = async  (e) => {
    setLoading(true)
    await dispatch(profileUpdate(params))
    await dispatch(fetchProfile(currentUser.uid))
    setLoading(false)
   }


    const handleInput = (e) => {
      const {name , value } = e.target
      setData({...data , [name] : value}) 
    }
  
   useEffect( async () => {
    
    if(currentUser.uid){
     setLoading(true)
     await dispatch(fetchProfile(currentUser.uid))
     setLoading(false)
    } 
    },[currentUser.uid , dispatch ])

    

    useEffect(() => {
      if(currentUser.uid){
        setData(profile)
      }
    }, [profile])


    const [openaddress , setOpenaddress] = useState(false)
    const [openmodal , setOpenmodal] = useState(false)

    const AddAddress = () => {
      setLoading(true)
      setOpenmodal(!openmodal)
      setOpenaddress(!openaddress)
      setLoading(false)
    }

   

    useEffect( () =>  {
      if(currentUser.uid){
        setLoading(true)
        dispatch(FetchAddress(currentUser.uid)) 
        setLoading(false) 
      }
  }, [currentUser])

    const address = useSelector(state => state.address.addresslist)
    const modaladdress = useSelector(state => state.modaladdress?.modaladdressvalue)


    const deleteBtn = (home , department , district , ward) => {
      setLoading(true)
      deleteAddress(home, department, district , ward)
      dispatch(FetchAddress(currentUser.uid)) 
      setLoading(false)
    }

    const editBtn = async  (home , department , district , ward , homemodal , departmentmodal ,districtmodal , wardmodal ) => {
      setLoading(true)
      AddAddress()
      await updateAddress(home, department, district , ward , homemodal , departmentmodal ,districtmodal , wardmodal )
      setLoading(false)

    }

  return (
    <Helmet title={"My Account"} >
            <div className="account">
                <div className="account__wrapper">
                      <div className="account__left">
                          <ul className="account__left__list">
                                <li className="account__left__list__item">
                                       Tri NGUYEN
                                       nguyenminhtri.vnpt2@gmail.com
                                </li>

                                <li onClick={() => setActive(1)}  className= {`account__left__list__item ${active == 1 ? "active" : ""}`}>
                                       <div className="account__left__list__item__img">
                                           <img src= {require("../assets/Img/accounttrahang.png")} alt="" />
                                       </div>
                                       <p>Đơn hàng & Trả hàng</p>
                                </li>


                                <li onClick={() => setActive(2)}   className={`account__left__list__item ${active == 2 ? "active" : ""}`}>
                                       <div className="account__left__list__item__img">
                                           <img src= {require("../assets/Img/accountthongtin.png")} alt="" />
                                       </div>
                                       <p>Thông tin</p>
                                </li>


                                <li onClick={() => setActive(3)}  className={`account__left__list__item ${active == 3 ? "active" : ""}`}>
                                       <div className="account__left__list__item__img">
                                           <img src= {require("../assets/Img/accountemail.png")} alt="" />
                                       </div>
                                       <p>Điạ chỉ</p>
                                </li>


                                <li onClick={() => Logout()}  className="account__left__list__item">
                                       <div className="account__left__list__item__img">
                                           <img src= {require("../assets/Img/accountdangxuat.png")} alt="" />
                                       </div>
                                       <p>Đăng xuất</p>
                                </li>

                              
                          </ul>
                     </div>

                     <div className="account__right">
                            <div className="account__right__content">
                                  <div className= {`account__right__content__item ${active === 1 ? "active" : ""}`}>
                                       <div className="account__right__content__item__navbar">
                                             <div className="account__right__content__item__navbar__item">      
                                                 <h6>Đơn hàng & Trả hàng</h6>
                                             </div>
                                             <div className="account__right__content__item__navbar__item">
                                                  <span>
                                                      Đơn hàng online
                                                  </span>
                                             </div>
                                             <div className="account__right__content__item__navbar__item">
                                                   <span>
                                                      Đơn hàng tại cửa hàng
                                                   </span>
                                             </div>
                                       </div>
                                       <div className="account__right__content__item__bill__list">
                                            {
                                                checkoutlist.map((checkoutitem , index ) => (

                                                    <div className="account__right__content__item__bill" key = {index}>
                                                        <div className="account__right__content__item__bill__key">
                                                              <div className="account__right__content__item__bill__key__item">Mã đơn hàng: <strong>{Math.floor(Math.random() * 10000000)}</strong></div>
                                                              <div className="account__right__content__item__bill__key__item">{checkoutitem.time}</div>
                                                              <div className="account__right__content__item__bill__key__item color-blue ">Tóm tắt</div>
                                                        </div>

                                                        <div className="account__right__content__item__bill__content">
                                                              <div className="account__right__content__item__bill__content__top">
                                                                  <div className="account__right__content__item__bill__content__top__item">
                                                                    Giao hàng tại nhà <br></br>
                                                                  <strong>Dự kiến giao hàng vào Thứ Ba 5 tháng 4 2022</strong> 
                                                                  </div>

                                                                  <div className="account__right__content__item__bill__content__top__item">
                                                                      <span>Theo dõi đơn hàng</span>
                                                                  </div>

                                                                  <div className="account__right__content__item__bill__content__top__item">
                                                                      <p className="color-blue" ><strong>Chi tiết đơn hàng</strong></p>
                                                                  </div>
                                                              </div>

                                                              <div className="account__right__content__item__bill__content__bottom">
                                                                    {
                                                                          checkoutitem?.value?.map((item , index ) => (
                                                                            
                                                                                <div className="account__right__content__item__bill__content__bottom__item" key = {index}>
                                                                                  
                                                                                      <div className="account__right__content__item__bill__content__bottom__item__product">
                                                                                            
                                                                                                <div className="account__right__content__item__bill__content__bottom__item__product__img">
                                                                                                      <img src= {item.image} alt="" />
                                                                                                </div>

                                                                                                <div className="account__right__content__item__bill__content__bottom__item__product__content">
                                                                                                    <p>{item.name}</p>
                                                                                                    <p>KÍCH CỠ: không có cỡ</p> <br></br> 
                                                                                                    <p>Số lượng: {item.quantity}</p>
                                                                                                    <strong>{numberWithCommas(item.price)} VNĐ</strong>
                                                                                                </div>
                                                                                      </div>

                                                                                      <div className="account__right__content__item__bill__content__bottom__item__button">
                                                                                              <span>Trả hàng</span>
                                                                                              <span>Mua lại</span>
                                                                                      </div>
                                                                                </div>
                                                                          ))
                                                                      }
                                                            </div>
                                                        </div>
                                                      {/* <div className="account__right__content__item__bill__img">
                                                                  <img src= {require("../assets/Img/accountbill.gif")} alt="" />  
                                                                  Chưa có đơn hàng
                                                      </div>        */}
                                                    </div>
                                                ))
                                            }
                                       </div>

                                  </div>

                                  <div  className= {`account__right__content__item ${active === 2 ? "active" : ""}`}>
                                      <h3>Thông tin cá nhân</h3>
                                      <div className="account__right__content__item__form">
                                        <Grid
                                          col = {2}
                                          mdCol = {1}
                                          gap = {20}
                                        >
                                        <div className="account__right__content__item__form__child">
                                               <label htmlFor="">Tên & tên đệm*</label>
                                               <input name = "middlename" onChange = {handleInput}  value = {data?.middlename} type="text" />
                                          </div>

                                          <div className="account__right__content__item__form__child">
                                               <label htmlFor="">Họ*</label>
                                               <input name = "firstname" onChange = {handleInput}  value = {data?.firstname}   type="text" />
                                          </div>

                                          <div className="account__right__content__item__form__child">
                                               <label htmlFor="">Số điện thoại*</label>
                                               <input name = "phone" onChange = {handleInput}  value = {data?.phone} type="text" />
                                          </div>

                                          <div className="account__right__content__item__form__child">
                                               <label htmlFor="">Hộp thư*</label>
                                               <input  name = "email" onChange = {handleInput}  value = {data?.email}  type="text" />
                                          </div>

                                          <div className="account__right__content__item__form__child">
                                               <label htmlFor="">Giới tính</label>
                                               <div className="account__right__content__item__form__child__sex">
                                                   <button className= {data?.sex === 'Nam' ? 'account__right__content__item__form__child__sex__active' : '' } name = "sex" onClick = {handleInput} value = {"Nam"}>Nam</button>
                                                   <button className= {data?.sex === 'Nữ' ? 'account__right__content__item__form__child__sex__active' : '' } name = "sex" onClick = {handleInput}  value = {"Nữ"} >Nữ</button>
                                               </div>
                                          </div>     
                                        </Grid>
                                         
                                      </div>

                                      <div className="account__right__content__item__subrcise">
                                           <label htmlFor="">Đăng ký nhận thông tin từ Decathlon</label>
                                           <label htmlFor="">
                                                <div onClick={() => setSubrcise(true)}  >Có</div>
                                                <div onClick={() => setSubrcise(false)}  >Không</div>
                                                <div className={`indicator ${subrcise ? "active" : ""}`} ></div>
                                           </label>
                                      </div>

                                      <div className="account__right__content__item__agree">
                                            <div className="account__right__content__item__agree__left">
                                                  <input type="checkbox" />
                                                  <p>Tôi đã đọc và đồng ý với Điều khoản và Điều kiện</p>
                                            </div>

                                            <div className="account__right__content__item__agree__right">
                                                  <button onClick={handleSubmit}  >Lưu</button>
                                            </div>
                                      </div>
                                  </div>

                                  <div  className= {`account__right__content__item ${active === 3 ? "active" : ""}`}>
                                  <div className="account__right__content__item__address">
                                          <h3>Địa chỉ</h3>
                                            <Grid
                                              col = {2}
                                              mdCol = {1}
                                              gap = {20}
                                              
                                            >
                                                    <span onClick={() => AddAddress()}>
                                                        <div className="account__right__content__item__address__img">
                                                                <img src= {require("../assets/Img/accountplus.png")} alt="" />
                                                        </div>
                                                        
                                                          <h4>Thêm địa chỉ mới</h4>
                                                     </span>

                                                      {
                                                         address.map((item ,index) => (
                                                                <div className="account__right__content__item__address__item" key = {index}>
                                                                    <div className="account__right__content__item__address__item__wrapper">
                                                                        <div className="account__right__content__item__address__item__top">
                                                                            <p><strong>{item.data.home}</strong></p> 
                                                                            <p><strong>{data?.middlename} {data?.firstname}</strong></p> 
                                                                            <p>{item.data.location}, {item.data.department}, {item.data.ward}, {item.data.district}</p>
                                                                            <p>Điện thoại: {item.data.phone}</p>
                                                                        </div>
          
                                                                        <div className="account__right__content__item__address__item__bottom">
                                                                              <button onClick={() => editBtn(item.data.home , item.data.department , item.data.district , item.data.ward,   modaladdress.home , modaladdress.department , modaladdress.district , modaladdress.ward)} >Chỉnh sửa</button>
                                                                              <button  onClick={() => deleteBtn(item.data.home , item.data.department , item.data.district , item.data.ward)}>Xóa</button>
                                                                              <button>Địa chỉ mặc định</button>
                                                                        </div>
                                                                    </div>
                                                              
                                                                </div>
                                                         ))
                                                      }
                                                    


                                            </Grid>
                                            
                                  </div>
                                     
                                  </div>
                            </div>
                     </div>
                </div>
                {loading && <BigLoading/>}
                    
            </div>
           { 
             openaddress ?  <Addressmodal  open = { openaddress} />  : " "
           }
             
              

            
    </Helmet>
  )
}

export default Account
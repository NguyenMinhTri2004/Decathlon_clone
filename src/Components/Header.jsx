import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import SubMenu from './SubMenu';
import Modal from './Modal'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import MainAddressModal from '../Components/MainAddressModal'
import { addUser } from '../Redux/Auth/authSlide'
import { auth } from '../Firebase/Firebase'
import { onAuthStateChanged } from 'firebase/auth';
import {useDispatch } from "react-redux"
import {useHistory} from 'react-router-dom'
import Cookies from "js-cookie";


const Header = () => {

   const HeaderProduct = [
     {
       displayName: 'Gậy leo núi'
     },

     {
       displayName: 'Đồ bơi'
     },

     {
       displayName: 'Giày Chạy Trail'
     },

     {
       displayName: 'Máy Chạy Bộ'
     },

      {
        displayName: 'Golf'
      },

      {
        displayName: 'Balo'
      }
   ]

    const dispatch = useDispatch()
    const currentUser = Cookies.get("accessToken")

    useEffect(() => {
       
      const unLogin = onAuthStateChanged(auth , async (user) => {
  
           if(user) {
               dispatch(addUser(user))
           }else {
               dispatch(addUser(undefined))
           }  
      })
      return unLogin
  } , [currentUser])
   

    const history = useHistory()

   const HeaderLink = [
    {
      path: currentUser ?  '/account' : "/login",
      icon : <i className='bx bx-user'></i>,
      displayName:  currentUser  ? "Tài Khoản" : "Đăng nhập"
    },

    {
      path: '/shop',
      icon : <i className='bx bx-store'></i>,
      displayName: 'Cửa hàng'
    },

    {
      path: '/contact',
      icon : <i className='bx bx-chat' ></i>,
      displayName: 'Liên hệ'
    },

    {
      path: '/cart',
      icon : <i className='bx bx-cart-alt' ></i>,
      displayName: 'Giỏ hàng'
    },

     
  ]

  
  const [menuMobile , setmenuMobile] = useState(false)
  const [opensubMenu , setOpensubmenu] = useState(false)
  const [openmainaddress , setOpenmainaddress] = useState(false)
  const [search , setSearch] = useState('')
  
 
  
  const Openmobilemenu = () => {
    setmenuMobile(!menuMobile)
    setOpensubmenu(!opensubMenu)
  }

   useEffect(() => {
       setOpensubmenu(opensubMenu)
       setOpenmainaddress(openmainaddress)
   } , [opensubMenu , openmainaddress])

   const handleSearch = (e) => {
        if(e.key === 'Enter') {
             if(search === ""){
                alert("Vui lòng nhập từ khóa tìm kiếm...")
             }else {
               history.push(`/search/${search}`)  
             }
        }
   }

  return (
    <div  >

      {
         openmainaddress ?  <MainAddressModal  open = {openmainaddress} /> : ""
      }

     
      <div className="header">
          
            <div className="header__wrapper">
 
             <div className="header__left">
                <div onClick={() => Openmobilemenu()} className= {`header__mobile ${menuMobile ? 'active' : ""}`}>
                    <div className="header__mobile__item"></div>
                    <div className="header__mobile__item"></div>
                    <div className="header__mobile__item"></div>
                    
                </div>
  
                  
                  <div className="header__logo">
                    <Link to="/">
                          <img src= {require("../assets/Img/logo.png")} alt="" />
                    </Link>
                  </div>
             </div>
 
                <div className="header__center">
                     <div className="header__center__top">
                          <select>
                             <option value>VI</option>
                             <option value>EN</option>
                          </select>
 
                           <div className="header__center__top__search">
 
                                <span className="header__center__top__search__icon">
                                     <i className='bx bx-search' ></i>
                               </span>
 
                               <input value = {search} onKeyDown = {(e) => handleSearch(e)} onChange = {(e) => setSearch(e.target.value)}  type="text" placeholder = "Tìm kiểm sản phẩm, môn thể thao..." ></input>
                           </div>
                          
                     </div>
 
                    
 
                </div>
 
                 <div className="header__link">
                    {
                        HeaderLink.map((item, index) =>(
                         <div key={index} className="header__link__item">
                            <Link to={item.path} >
                               <p>{item.icon}</p>
                               <p>{item.displayName}</p> 
                            </Link>
                         </div>
                        )) 
                    }
                 </div>
            </div>
            <div className="header__center__bottom">
                        {
                          HeaderProduct.map((item, index) =>(
                            
                           <div key={index} className="header__center__bottom__item">
                              {item.displayName}
                            </div>
                          )) 
                        }
            </div>
         
           <div className="header__delivery">
              <p>Giao hàng đến Hồ Chí Minh Quận 1</p>
              <span onClick={() => setOpenmainaddress(!openmainaddress)}>Thay đổi</span>
           </div>
  
          
        
      </div>
      
      <SubMenu open = {opensubMenu} />  : ' '
          {
            opensubMenu ? <Modal  /> : " "
          }

         
    </div>
     
  )
}

export default Header
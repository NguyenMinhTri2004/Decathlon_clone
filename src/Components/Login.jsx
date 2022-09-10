import React from 'react'
import Button from '../Components/Button'
import {useHistory} from 'react-router-dom'
import Helmet from '../Components/Helmet'
import { useState } from 'react'
import {Link} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux"
import { authLogin , authGoogleLogin , authFacebookLogin} from '../Redux/Auth/authSlide'
import { addUser } from '../Redux/Auth/authSlide'
import { auth } from '../Firebase/Firebase'
import { onAuthStateChanged , sendEmailVerification, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = props => {

  const history = useHistory()
  const dispatch = useDispatch()

  const gotoRegister = () => {
         history.push("/register")
  }

  const currentUser = useSelector(state => state.auth)
   
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const [remember , setRemember] = useState(false)


  const Login = async () => {
    
    const user = {email , password , remember }
    await dispatch(authLogin(user))

    
    if(currentUser.currentUser === undefined){
      toast.error("Sai thông tin đăng nhập !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })

    }else {

      history.push("/")
    }
   
    }
  


  useEffect(() => {
       
    const unLogin = onAuthStateChanged(auth , async (user) => {

         if(user) {
           const providerId = user.providerData.some(
              p => p.providerId === password
           ) 
             if( providerId  && !user.emailVerified) {
                await sendEmailVerification(user)
                await signOut(auth)
                return history.push("/email_verified")
             }

            
             dispatch(addUser(user))
             
             
             if(currentUser.currentUser !== undefined  && currentUser.loading !== true) {
  
               toast.success("Đăng nhập thành công tự động quay về trang chủ !", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
               })

               setTimeout(() => {
                 history.push("/")
               }, 5000);
                
           }
             
            }else {
              dispatch(addUser(undefined))
            }
        
    })

    return unLogin
} , [currentUser])
 
  
  

  return (
    <Helmet title = {"Đăng Nhập"}>
                <div className="login">
      <div className="login__top">
            {/* <div className="login__top__item">
                   <i class='bx bx-chevron-left'></i>
                   <h5>Quay lại</h5>
            </div> */}
            <div className="login__top__item">
                <div className="login__top__item__img">
                        <img src= {require("../assets/Img/logo.png")} alt="" />
                </div>
            </div>
      </div>
       <div className="login__content">
       <form action="">
           <h1>Đăng nhập</h1>
          
           <p>
             Một tài khoản kết nối tất cả ứng dụng trực tuyến của Decathlon và người chơi thể thao!
          </p> 
           <label>Nhập địa chỉ email</label>
           <input type="text" placeholder="Email" className="" value= {email} require
              onChange={(e) => setEmail(e.target.value)}
           />
           <label>Nhập mật khẩu</label>
           <input type="text" placeholder="Mật khẩu" className="" value= {password}  require
                onChange={(e) => setPassword(e.target.value)}
           />
           <div className="login__content__remember">
                 <div className="login__content__remember__left">
                 <input type="checkbox" className="" checked = {remember}
                     onChange={() => setRemember(!remember)}
                     />

                     <label htmlFor="">Remember me</label>
                 </div>
                   <div className="login__content__remember__right">
                         <Link  to='/forgot_password'>
                             <p>Forgot your password?</p>
                        </Link>
                    
                   </div> 
                      
           </div>
           <Button
              backgroundColor = {"blue"}
              size = {"sm"}
              onClick={() => Login()}
           >
                Tiếp
           </Button>

           <div className="login__content__spare">
                  <span></span><p>Hoặc</p><span></span>
           </div>

          
            <div className="login__content__social">
                <div onClick={() => dispatch(authFacebookLogin())} className="login__content__social__item">
                         <i className='bx bxl-facebook-circle'></i>
                </div>

                <div onClick={() => dispatch(authGoogleLogin())}  className="login__content__social__item">
                         <i className='bx bxl-google' ></i>
                </div>
            </div>

            <p className="login__content__register__txt"   >Bạn chưa có tài khoản? Đăng ký ngay!</p>
             <div className="login__content__register__button">
                  <span onClick={() => gotoRegister()} >
                      Tạo tài khoản
                  </span>
             </div>
      </form>
       </div>
          
                </div>


                <ToastContainer />
               
    </Helmet>
   
    
  )
}


export default Login
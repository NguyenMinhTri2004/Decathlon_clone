import React from 'react'
import Helmet from '../Components/Helmet'
const Contact = () => {
  return (
    <Helmet title= "Liên hệ chúng tôi">
        <div className="contact">

          <div className="contact__top">
                <img src= {require("../assets/Img/decathlon-vietnam.jpg")} alt="" />
          </div>

          <div className="contact__bottom">
             <div className="contact__bottom__left">
                   <p>Liên hệ chúng tôi</p>
                   <p>Tuyển dụng</p>
             </div>

             <div className="contact__bottom__right">

                            <h4>Liên hệ chúng tôi</h4>
                            <p>Hotline: 18009044</p> 
                            <p>+ Nhấn phím 1 để liên hệ Trung tâm Chăm sóc khách hàng</p>
                            <p>+ Nhấn phím 2 để liên hệ Cửa hàng Tân Phú</p>
                            <p>+ Nhấn phím 3 để liên hệ Cửa hàng Thanh Xuân, Hà Nội</p> 
                            <p>+ Nhấn phím 4 để liên hệ Cửa hàng Thảo Điền, Hồ Chí Minh</p>
                            <p>  + Nhấn phím 5 để liên hệ Cửa hàng Decathlon Connect Hà Đông, Hà Nội</p>
                            <p>Email: cskh@decathlon.com</p> 
                            <p>Fanpage: Decathlon Việt Nam</p>  
                            <p>Thời gian làm việc: Thứ 2 - Thứ 7, từ 9h đến 22h; Chủ Nhật, từ 10h đến 19h</p>  
                            <h4>Tuyển dụng</h4> 
                            <p>Các vấn đề liên quan đến tuyển dụng, xin vui lòng liên hệ theo email: recruit.vietnam@decathlon.com hoặc website.</p> 

             </div>

          </div>
        </div>
    </Helmet>
  )
}

export default Contact 
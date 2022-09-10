import React from 'react'
import Button from '../Components/Button'
import { useState } from 'react'
import Modal from '../Components/Modal'
const MainAddressModal = props => {

  const [open , setOpen] = useState(props.open)

  
 

  return (

    <>

      {
          open ? <Modal open={open}  setOpen = {setOpen}    /> : ""
      }
     
      <div className= {`mainaddressmodal ${open ? "" : "close"}`}>
          <div className="mainaddressmodal__wrapper">
              <div className="mainaddressmodal__close">
                  <span onClick={() => setOpen(!open)}>X</span>
              </div>
             <div className="mainaddressmodal__left">
                    <h3> <strong>VỊ TRÍ</strong></h3>
                    <p>Chọn địa chỉ để xem ngày giao hàng dự kiến.</p>
                     <div className="mainaddressmodal__left__img">
                         <img src= {require("../assets/Img/mainaddressimg.png")} alt="" />
                     </div>

             </div>

             <div className="mainaddressmodal__right">

                  <div className="mainaddressmodal__right__item">
                       <strong><h6>CHỌN ĐỊA CHỈ</h6></strong> 
                       <div className="mainaddressmodal__right__item__content">
                           <div className="mainaddressmodal__right__item__content__wrapper">
                                <div className="mainaddressmodal__right__item__content__top">
                                        <span>
                                            <strong>Nhà riêng</strong>
                                        </span>

                                        <span>
                                            <p>Đà Nẵng</p>
                                        </span>
                                </div>

                                <div className="mainaddressmodal__right__item__content__bottom">
                                        <p className='color-blue' >QUẢN LÝ ĐỊA CHỈ</p>
                                </div>

                           </div>
                       </div>
                  </div>

                  <div className="mainaddressmodal__right__item">
                         <p>HOẶC</p>
                  </div>

                  <div className="mainaddressmodal__right__item">
                      <div className="mainaddressmodal__right__item__content__wrapper">

                        <div className="mainaddressmodal__right__item__content__left">
                                 <label htmlFor="">Tỉnh</label>
                                 <label htmlFor="">Quận</label>
                                
                        </div>

                        <div className="mainaddressmodal__right__item__content__right">
                              
                                 <select name="" id="">
                                     <option value="">Quận 5</option>
                                     <option value="">Quận 2</option>
                                 </select>

                                 <select name="" id="">
                                     <option value="">Hà Nội</option>
                                     <option value="">Hồ Chí Minh</option>
                                 </select>
                        </div>

                        <div className="mainaddressmodal__right__item__content__button">
                             <Button
                                backgroundColor = {"blue"}
                             >
                                 ÁP DỤNG
                             </Button>
                        </div>

                      </div>
                  </div>
             </div>

          </div>
      </div>
    </>
      
  )
}



export default MainAddressModal
import React from 'react'
import Button from '../Components/Button'
import { useState } from 'react'
const Coupon = props => {
  
  const [open , setOpen] = useState(true)

  return (
     <div className="coupon">
          <div onClick={() => setOpen(!open)}  className= {`coupon__title ${open ? "active" : ""}`}>
              <h6>NHẬN CUOPON NGAY</h6>
              <i className='bx bxs-chevron-right'></i>
          </div>

          <div className= {`coupon__content ${open ? "active" : ""}`}>
              <div className="coupon__content__wrapper">
                   <p>
                   Decathlon tri ân, miễn phí giao hàng cho tất cả đơn hàng
                   </p>
                   <span>
                       D22
                   </span>
                   <Button
                     size = {"sm"}
                     backgroundColor = {"blue"}
                   >
                       LẤY MÃ!
                   </Button>
                   <p onClick={() => setOpen(false)} >X(tắt)</p>
              </div>
          </div>
     </div>
  )
}



export default Coupon
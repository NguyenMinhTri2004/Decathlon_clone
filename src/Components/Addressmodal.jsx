import React from 'react'
import Button from './Button'
import Grid from './Grid'
import { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {createAddress} from '../Redux/Address/addressAction'
import { FetchAddress}  from '../Redux/Address/addressSlice'
import { addModaladdress } from '../Redux/ModalAddress/modaladdressslice'
import Modal from  "../Components/Modal"
import { BigLoading } from './Loading'

const Addressmodal = props => {

  const dispatch = useDispatch()

  const init = {
    home :"",
    department : "",
    district : "", 
    ward : "",
    middlename : "",
    surename: "",
    phone : "",
    location : "",
  }
     
  const [data , setData] = useState(init)

  const [loading , setLoading] = useState(false)

  const currentUser = useSelector(state => state.auth.currentUser)

  const handleInput = (e) => {
    const {name , value } = e.target
    setData({...data , [name] : value}) 
  }

  const params = {
        data,
        uid : currentUser.uid
  }

  
  const handleSubmit = async (params ,home , department , district, ward) => {
      setLoading(true)
      createAddress (params ,home , department , district, ward)
      await dispatch(FetchAddress(currentUser.uid)) 
      await dispatch(addModaladdress({
                  home,
                  department , 
                  district , 
                  ward
            }))

      setLoading(false)      
  }

  const [open , setOpen] = useState(props.open)
  
  
  
  return (
   <>
     <div className= {`addressmodal ${open === true ? "active" : ""}`}>
         <div className="addressmodal__wrapper">
             <div className="addressmodal__top">
                     <h4>THÊM ĐỊA CHỈ MỚI</h4>
                     <span onClick={() => setOpen(!open)} >X</span>
             </div>

             <div className="addressmodal__bottom">
                 <Grid
                   col = {2}
                   mdCol = {2}
                   smCol = {2}
                   gap = {20}
                   size = {"sm"}
                 >
                   <div className="addressmodal__bottom__item">
                       <label>Nhà riêng</label>
                       <input onChange={(e) => handleInput(e)} name = "home"  value = {data.home}  type="text" className=""/>
                   </div>
                   <div className="addressmodal__bottom__item">
                       <label>CHỌN TỈNH</label>
                       <input onChange={(e) => handleInput(e)} name = "department" value = {data.department} type="text" className=""/>
                   </div>
                   <div className="addressmodal__bottom__item">
                         <label>CHỌN QUẬN</label>
                         <input onChange={(e) => handleInput(e)}  name = "district"  value = {data.district} type="text" className=""/>
                   </div>
                   <div className="addressmodal__bottom__item">
                         <label>CHỌN PHƯỜNG</label>
                         <input onChange={(e) => handleInput(e)} name = "ward" value = {data.ward} type="text" className=""/>
                   </div>
                   <div className="addressmodal__bottom__item">
                         <label>Tên & Tên đệm*</label>
                         <input onChange={(e) => handleInput(e)} name = "middlename" value = {data.middlename} type="text" className=""/>
                   </div>
                   <div className="addressmodal__bottom__item">
                            <label>Họ*</label>
                            <input onChange={(e) => handleInput(e)} name = "surename"  value = {data.surename}   type="text" className=""/>
                   </div>
                   <div className="addressmodal__bottom__item">
                            <label>Điện thoại</label>
                            <input onChange={(e) => handleInput(e)} name = "phone" value = {data.phone} type="text" className=""/>
                   </div>
                   <div className="addressmodal__bottom__item">
                         <label>Địa chỉ nhận hàng</label>
                         <input onChange={(e) => handleInput(e)}  name = "location" value = {data.location} type="text" className=""/>
                   </div>
                 </Grid>

                   <div className="addressmodal__bottom__item">
                         <label>Ghi chú về địa chỉ</label>
                         <input onChange={(e) => handleInput(e)}  name = "note" value = {data.node} type="text" className=""/>
                   </div>
                   <div className="addressmodal__bottom__item">
                         <label>Mã số thuế cty, địa chỉ(để xuất hóa đơn VAT)</label>
                         <input  onChange={(e) => handleInput(e)}  name = "tax" value = {data.tax} type="text" className=""/>
                   </div>

                   <div className="addressmodal__bottom__item">
                        <Button onClick={() => handleSubmit(params , data.home , data.department , data.district , data.ward)}>
                            LƯU ĐỊA CHỈ
                        </Button>
                   </div>

             </div>
         </div>

          {loading && <BigLoading/>}
     </div>
      {
            open ? <Modal open={open} setOpen = {setOpen}/> : " "
      }
   </>     
  )
}



export default Addressmodal
import React from 'react'
import {SectionBody} from './Section'
import Section from './Section'
import Grid from './Grid'
const Footer = () => {

  const FooterLink = [
    {
      displayName: 'HỖ TRỢ'
      
    },

    {
      displayName: 'LIÊN HỆ'
    },

    {
      displayName: 'VỀ DECATHLON'
    },

    {
      displayName: 'PHÁP LÝ'
    }

  ]

  const FooterAbout = [
    {
      description : 'Phương Thức Giao Hàng',
      description : 'Phương Thức Thanh Toán',
      description : 'Quy Trình Trả Hàng',
      description : 'Thẻ Quà Tặng Decathlon',
      description : 'Câu Hỏi Thường Gặp',
    },

    {
      description : 'Cửa Hàng Tại Việt Nam',
      description : 'Chăm Sóc Khách Hàng',
      description : 'Ưu Đãi Cho Doanh Nghiệp',
      description : 'Đáng Giá Website',
     
    },

    {
      description : 'Decathlon Là Ai?',
      description : 'Tuyển Dụng',
      description : 'Sản Phẩm Thân Thiện Môi Trường',
    },

    {
      description : 'Điều Khoản Mua Hàng',
      description : 'Chính Sách Bảo Mật',
      description : 'Bản Công Bố Sản Phẩm',
      description : 'Thu Hồi Sản Phẩm',
     
    },





  ]
   
  return (
    <div className="container">
     <Section>
        <SectionBody>
          <div className="footer">
            <div className="footer__top">
            <Grid
             col = {4}
             mdCOl = {2}
             smCol = {1}
            >
               {
                
                   FooterLink.map((item, index) => (
                      <div key={index} className="footer__top__item" >
                         <div className="footer__top__item__title">
                            {item.displayName}
                        </div>

                        
                          <div className="footer__top__item__about">
                            {
                              FooterAbout.map((item, index) => (
                                 <p key = {index}>{item.description}</p>
                              ))

                            }
                          </div>
                        
                         
                        
  
                      </div>
                   ))
                
               }

            </Grid>
            </div>
            <div className="footer__midle">
                  <Grid
                   col = {4}
                   mdCOl = {2}
                   smCol = {1}
                  >
                      <div className="footer__midle__item">
                           <div className="footer__midle__item__child__first">
                                  <img src= {require('C:\\Users\\DELL\\Desktop\\Decathlon-clone\\decathlon-clone\\src\\assets\\Img\\mid-footer-1.png')} alt="" />
                             </div>

                             <div className="footer__midle__item__child">
                                <h5>GIAO DỊCH AN TOÀN 100%</h5>
                                <p>Mã hóa SSL an toàn</p>
                             </div>
                      </div>

                      <div className="footer__midle__item">
                           <div className="footer__midle__item__child">
                                 <img src= {require('C:\\Users\\DELL\\Desktop\\Decathlon-clone\\decathlon-clone\\src\\assets\\Img\\Derit.png')}  alt="" />
                            </div>

                            <div className="footer__midle__item__child">
                                <img src=  {require('C:\\Users\\DELL\\Desktop\\Decathlon-clone\\decathlon-clone\\src\\assets\\Img\\credit.png')} alt="" />
                            </div>

                            <div className="footer__midle__item__child">
                                 <img src= {require('C:\\Users\\DELL\\Desktop\\Decathlon-clone\\decathlon-clone\\src\\assets\\Img\\zalopay.png')}  alt="" />
                            </div>

                            <div className="footer__midle__item__child">
                                <img src= {require('C:\\Users\\DELL\\Desktop\\Decathlon-clone\\decathlon-clone\\src\\assets\\Img\\cardon.png')}  alt="" />
                            </div>
                      </div>

                      <div className="footer__midle__item">
                            <div className="footer__midle__item__child__map">
                                <p>Sơ đồ trang web</p>
                             </div>
                      </div>

                      <div className="footer__midle__item">
                             <div className="footer__midle__item__child">
                                 <p>Decathlon có mặt tại</p>
                             </div>

                             <div className="footer__midle__item__child">
                                   <span className="footer__midle__item_child__country"  >46 Countries</span>
                              </div>
                      </div>

                  </Grid>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__slogan">
                   <p>THỂ THAO CHO TẤT CẢ - TẤT CẢ VÌ THỂ THAO</p>
                </div>
                <div className="footer__bottom__img">
                   <div className="footer__bottom__img__leaft">
                        <img src="https://cdncontent.decathlon.vn/_next/static/images/right-leaf-e1c4e49a470eee3c8b85a4708e0c2ba8.png" alt="" />
                    </div>

                    <div className="footer__bottom__img__tree">
                        <img src="https://cdncontent.decathlon.vn/_next/static/images/left-leaf-d9a441e454a74be0b9e9c623db56ac53.png" alt="" />
                    </div>

                   <img src= {require('C:\\Users\\DELL\\Desktop\\Decathlon-clone\\decathlon-clone\\src\\assets\\Img\\footer-logo.png')} alt="" />

                   <div className="footer__bottom__img__underline">
                       <div className="bg-blue" ></div>
                       <div className="bg-orange"  ></div>
                       <div className="bg-green" ></div>
                  </div>
                </div>
            </div>
          </div>
        </SectionBody>
     </Section>
    </div>
  )
}

export default Footer
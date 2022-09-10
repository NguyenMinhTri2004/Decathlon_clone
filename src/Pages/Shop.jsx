import React from 'react'
import Section from '../Components/Section'
import {SectionBody , SectionTitle} from '../Components/Section'
import Helmet from '../Components/Helmet'
const Shop = () => {
  return (
     <Helmet  title={"Store Locator"} >
            <div className="shop">
               <Section>
                     <div className="shop__top">
                              <div className="shop__top__item">
                                    <h1>4</h1>
                                    <p>CỬA HÀNG</p>
                              </div>

                              <div className="shop__top__item">
                                    <h3>DANH SÁCH <span>CỬA HÀNG DECATHLON</span> </h3>
                              </div>
                        </div>
               </Section>
                  

                  <div className="shop__bottom">
                     <Section>
                        <SectionTitle>
                           Cửa hàng Decathlon
                        </SectionTitle>

                        <SectionBody>
                              <div className="shop__bottom__store">
                                 <div className="shop__bottom__store__wrapper">
                                    <div className="shop__bottom__store__item">
                                          <img src= {require("../assets/Img/hcm icons.png")} alt="" />
                                          <p>Tp Hồ Chí Minh</p>
                                    </div>

                                 </div>
                                 <div className="shop__bottom__store__wrapper">
                                    <div className="shop__bottom__store__item">
                                          <img src= {require("../assets/Img/hanoi icons.png")} alt="" />
                                          <p>Hà Nội</p>
                                    </div>

                                 </div>
                              </div>
                        </SectionBody>
                     </Section>

                     <Section>
                        <SectionTitle>
                           Điểm lấy hàng Click & Collect
                        </SectionTitle>
                              
                        <SectionBody>
                              <div className="shop__bottom__receive">
                                    <div className="shop__bottom__receive__item">
                                       <span>Tp Hồ Chí Minh(6)</span>
                                    </div>

                                    <div className="shop__bottom__receive__item">
                                          <span>Hà Nội(5)</span>
                                    </div>
                              </div>
                        </SectionBody>
                     </Section>
                  </div>
            </div>
     </Helmet>
  )
}

export default Shop
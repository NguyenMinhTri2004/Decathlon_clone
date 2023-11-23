import React from 'react'
import {useEffect} from 'react'
import ProductDetail from '../Components/ProductDetail'
import {ProductData} from '../assets/fake-data/Productdata'
import  {useParams}  from 'react-router-dom'
import Section from '../Components/Section'
import {SectionBody , SectionTitle} from '../Components/Section'
import Grid from '../Components/Grid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import {Link} from "react-router-dom"
import ProductCart from '../Components/ProductCart'
import { getProducts} from "../api/product"
import { useState } from 'react'
import Services from '../Components/Services'
import { getProductBySlug , getProductsHandle} from '../utils/handlegetData'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Products = (props) => {

 
  let link = useParams()

  const [products, setProducts] = useState([])
  const [product , setProduct] = useState(null)

  useEffect(() => {
    getProducts()
    .then((res) => {
       console.log(res)
       setProducts(res?.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  useEffect(() => {
     let tmp = getProductBySlug(link.slug , products)
     setProduct(tmp)
   }, [products])

  const productrandom =  getProductsHandle(10 , products)

  const [tabactive , Settabactive] = useState(1)


  useEffect(() => {
    window.scrollTo(0,0)
  }, [product])
  
  const images = product?.img?.map(image => {
     return (
          {
                  
             original:  image,
             thumbnail: image,
                  
          }
     )
 })

   const mainImage = product?.img.map(image => {
       return (
           {
               original:  image,
               thumbnail: image,
                    
           }
       )
   })


  return (
    <div className="product">
      {/* Section product main start */}
        <Section>
            <ProductDetail  product = {product} images = {images}  mainImage = {mainImage}/>
       </Section>

       {/* Section product main end */}

        {/* Section product relate start */}
       
       <Section>
            <SectionTitle>
               GỢI Ý
               DÀNH CHO BẠN
            </SectionTitle>

            <SectionBody>  
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween= {10}
                slidesPerView= {5}
                navigation
               //  onSlideChange={() => console.log('slide change')}
               //  onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{

                     320 : {
                        slidesPerView: 3,
                        spaceBetween: 15,
                      },

                     640: {
                       slidesPerView: 3,
                       spaceBetween: 15,
                     },

                    768: {
                       slidesPerView: 3,
                       spaceBetween: 15,
                     },

                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 15,
                     },
                }}
              >
       

             {
               productrandom.map((item , index) => (
                    <SwiperSlide key={index}>
                       <Link to = {`/catalog/${item?.slug}`} >
                           <ProductCart
                              img = {item?.img}
                              price = {item?.money}
                              name = {item?.name}
                              rate = {item?.rate}
                              discount = {item?.discount}
                           />
                       </Link>
                    </SwiperSlide>
                ))
             }
        
         </Swiper>
            </SectionBody>

       </Section>

       {/* Section product relate end */}

       {/* Section product benefit start */}

          <Section>
              <SectionBody>
                  <div className="product__overview">
                      
                       <div className="product__overview__title">
                           
                               <div  onClick={() => Settabactive(1)}  className= {`product__overview__title__item ${tabactive === 1 ? "active" : ""}`}>
                                    <h4>LỢI ÍCH SẢN PHẨM</h4>
                                </div> 

                                <div  onClick={() => Settabactive(2)}   className={`product__overview__title__item ${tabactive === 2 ? "active" : ""}`}>
                                    <h4>CHI TIẾT SẢN PHẨM</h4>
                                </div> 

                                <div  onClick={() => Settabactive(3)}  className={`product__overview__title__item ${tabactive === 3 ? "active" : ""}`}>
                                    <h4>ĐÁNH GIÁ</h4>
                                </div> 
                           
                       </div>

                     

                       <div className= {`product__overview__content ${tabactive === 1 ? "active" : ""}`}>
                          <Grid
                            col = {2}
                            mdCol = {2}
                            smCol = {1}
                            gap = {30}
                          >
                            <div className="product__overview__content__item   ">
                                <div className="product__overview__content__item__icon">
                                      <img src= {require("../assets/Img/benefit1.jpg")} alt="" />
                                </div>

                                <div className="product__overview__content__item__text">
                                       <h6>Tầm nhìn</h6>
                                       <p>Tầm nhìn rất rộng, 135"-150°, có thể nhìn thấy mọi thứ xung quanh </p>
                                </div>
                            </div>

                            <div className="product__overview__content__item">
                                <div className="product__overview__content__item__icon">
                                      <img src= {require("../assets/Img/benefit2.jpg")} alt="" />
                                </div>

                                <div className="product__overview__content__item__text">
                                       <h6>Độ chắc chắn</h6>
                                       <p>Hiệu quả tuyệt vời nhờ thiết kế linh hoạt và nhỏ gọn.</p>
                                </div>
                            </div>

                            <div className="product__overview__content__item">
                                <div className="product__overview__content__item__icon">
                                        <img src= {require("../assets/Img/benefit3.jpg")} alt="" />
                                </div>

                                <div className="product__overview__content__item__text">
                                       <h6>Điều chỉnh được</h6>
                                       <p>1 cỡ điều chỉnh: dây đeo xẻ phía sau, điều chỉnh ở bên, sống mũi liền khối</p>
                                </div>
                            </div>

                            <div className="product__overview__content__item">
                                <div className="product__overview__content__item__icon">
                                         <img src= {require("../assets/Img/benefit4.jpg")} alt="" />
                                </div>

                                <div className="product__overview__content__item__text">
                                         <h6>Chống mờ</h6>
                                         <p>Đặc tính chống đọng sương trên mặt bên trong mắt kính.</p>
                                </div>
                            </div>

                            <div className="product__overview__content__item">
                                <div className="product__overview__content__item__icon">
                                        <img src= {require("../assets/Img/benefit5.jpg")} alt="" />
                                </div>

                                <div className="product__overview__content__item__text">
                                         <h6>Chống thấm nước</h6>
                                         <p>Đệm viền rất mềm, dễ dàng điều chỉnh vừa vặn ôm khít khuôn mặt.</p>
                                </div>
                            </div>
                          </Grid>
                            
                       </div>

                       <div className= {`product__overview__content ${tabactive === 2 ? "active" : ""}`}>
                         <h6>GIỚI TÍNH</h6>  <br></br>
                         NAM NỮ MỌI LỨA TUỔI<br></br>
                         <h6>LOẠI SỐNG MŨI</h6><br></br>
                         Sống mũi một mảnh<br></br>
                         <h6>LOẠI TRÒNG KÍNH</h6><br></br>
                         Tròng kính tráng gương
                         <h6>TRÌNH ĐỘ LUYỆN TẬP</h6><br></br>
                         Trình độ trung bình<br></br>
                         <h6>KÍNH ĐỌNG SƯƠNG</h6><br></br>
                         Kính có thể đọng sương do một số yếu tố, sự chênh lệch nhiệt độ giữa cơ thể và nước, độ ẩm vv. Mòn kính do ma sát là một trong những lý do chính. Nếu kính bị đọng sương, hãy nhúng tròng kính vào nước và màng bảo vệ sẽ được phục hồi. Sau một khoảng thời gian nhất định, thông thường hiệu quả chống đọng sương của kính sẽ giảm. Chúng tôi có bán bút chống đọng sương để phục hồi lớp phủ chống đọng sương và tăng tuổi thọ cho kính bơi.<br></br>
                         <h6>CHỌN CỠ</h6><br></br>
                         Độ kín nước của kính bơi tùy thuộc vào độ vừa khít của viền kính với khuôn mặt bạn. Trước khi mua, bạn nên thực hiện kiểm tra "độ hút" khi không đeo dây quai kính. Nếu kính giữ nguyên trên mặt bạn với độ mút nhẹ, sản phẩm sẽ có tính kín nước khi bơi. Điều này còn giúp bạn phát hiện ra những vị trí khó chịu khi đeo sản phẩm trên mặt. Mẫu sản phẩm này có cỡ S (mặt nhỏ) và cỡ L<br></br>
                         <h6>CÁCH ĐIỀU CHỈNH KÍNH</h6><br></br>
                         Kính bơi này ôm vừa vặn khuôn mặt của bạn mà không cần phải quá chặt. Kính bơi quá chặt gây cảm giác khó chịu, để lại vết hằn và tạo lỗ khiến nước vào trong. Không cần dùng tay ấn mắt kính, thông thường, chỉ cần lực hút nhẹ là đủ để tập bơi mà không tạo lỗ khiến nước vào trong. Quai đeo nên cách tai 2 - 3 cm. Vị trí này giúp tối ưu hóa độ bám và sự thoái mái của kính.<br></br>
                         <h6>LƯU Ý KHI CHĂM SÓC</h6><br></br>
                         Chúng tôi khuyến nghị: - rửa sạch kính (chỉ khi cần) bằng cách nhúng xuống nước - tránh phun nước áp lực cao trực tiếp vào bề mặt bên trong mắt kính. - cất kính vào hộp sau mỗi buổi tập để tránh làm hỏng mắt kính (trên bề mặt bên trong vì có phủ lớp chống đọng sương và trên bề mặt bên ngoài để tránh làm xước) - không để kính tiếp xúc với nhiệt độ trên 60°C KHÔNG CHẠM/CHÀ XÁT MẶT TRONG CỦA MẮT KÍNH<br></br>
                        <h6>SẮC ĐỘ CỦA MẮT KÍNH</h6> <br></br>
                         Màu kính phải phù hợp với địa điểm bơi và điều kiện ánh sáng. Nếu bạn luyện tập bên ngoài hoặc trong hồ bơi có ánh sáng mạnh, hãy sử dụng kính với mắt kính sẫm màu để hạn chế ánh sáng chói. Tuy nhiên, nếu bể bơi khá tối với độ chiếu sáng kém, ví dụ vào các buổi tối mùa đông, bạn nên sử dụng mắt kính trong suốt. Kính bơi SPIRIT có sẵn nhiều sắc độ mắt kính khác nhau.<br></br>
                         <h6>CHỐNG TIA CỰC TÍM</h6><br></br>
                         Tuân theo tiêu chuẩn: Q/BT 4734 - 2014, tất cả kính bơi Nabaiji bảo vệ khỏi tia UVA và UVB khi sử dụng thông thường, bất kể màu mắt kính. Nhìn trực tiếp vào mặt trời rất nguy hiểm và có thể khiến tổn thương mắt không thể phục hồi.<br></br>
                         <h6>BẢO HÀNH</h6><br></br>
                         2 Năm<br></br>
                         <h6>ĐƯỢC KIỂM TRA BỞI</h6><br></br>
                         Kính bơi Nabaiji tuân theo quy định EPI 2016/425. Sản phẩm của chúng tôi được thử nghiệm và chứng nhận bởi các phòng thí nghiệm độc lập. Kính dành cho bơi lội trên mặt nước<br></br>
                         <h6>THÀNH PHẦN</h6><br></br>
                         Ống kính : 100.0% Polycarbonat (PC) Vòng đệm : 100.0% Polyetylen dẻo nóng Khung (mặt nạ bơi) : 50.0% Polycarbonat (PC), Khung (mặt nạ bơi) : 50.0% Polyetylen dẻo nóng Quai : 100.0% Silicon<br></br>
                         <h6>TƯ VẤN LƯU TRỮ</h6><br></br>
                         Cất kính vào hộp sau khi sử dụng. Lưu ý: Không chạm vào mặt trong của mắt kính để tránh làm hỏng tính năng chống đọng sương<br></br>
                       </div>

                       <div className= {`product__overview__content ${tabactive === 3 ? "active" : ""}`}>
                                   <h4 className='color-blue' >Chưa có nhận xét nào</h4>
                       </div>

                      
                  </div>
              </SectionBody>
          </Section>

       {/* Section product benefit end */}


       {/* Section product explore start */}
          <Section>
              <SectionTitle>
                <div className="product__explore__title">
                        <h3>KHÁM PHÁ THÊM CÁC MÔN THỂ THAO</h3>
                </div>   
              </SectionTitle>

              <SectionBody>
                     <Grid
                      col = {10}
                      mdCol = {5}
                      smCol = {5}
                      gap = {22}
                     >
                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/dabong.webp")} alt="" />
                              <p>đá bóng</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/tapta.webp")} alt="" />
                              <p>tập tạ</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/phitieu.webp")} alt="" />
                              <p>phi tiêu</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/dibo.webp")} alt="" />
                              <p>đi bộ</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/caulong.webp")} alt="" />
                              <p>cầu lông</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/bongro.webp")} alt="" />
                              <p>bóng rổ</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/boxing.webp")} alt="" />
                              <p>boxing</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/maytap.webp")} alt="" />
                              <p>máy tập</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/scooter.webp")} alt="" />
                              <p>scooter</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/yoga.webp")} alt="" />
                              <p>yoga</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/camtrai.webp")} alt="" />
                              <p>cắm trại</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/dapxe.webp")} alt="" />
                              <p>đạp xe</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/lan.webp")} alt="" />
                              <p>lặn</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/bongchay.webp")} alt="" />
                              <p>bóng chày</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/tennis.webp")} alt="" />
                              <p>tennis</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/boiloi.webp")} alt="" />
                              <p>bơi lội</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/hikingtreking.webp")} alt="" />
                              <p>hiking/treking</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/chaybo.webp")} alt="" />
                              <p>chạy bộ</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/sup.webp")} alt="" />
                              <p>SUP & Kayak</p>
                         </div>

                         <div className="product__explore__item">
                              <img src= {require("../assets/Img/bancung.webp")} alt="" />
                              <p>Bắn cung</p>
                         </div>

                     </Grid>
              </SectionBody>
          </Section>
       {/* Section product explore end */}

       {/* Section service start */}

          <Services>
          </Services>
           
       {/* Section service end */}

    </div>
    
  )
}

export default Products
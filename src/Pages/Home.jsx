import React, { useEffect , useState } from 'react'
import Helmet from '../Components/Helmet'
import Services from '../Components/Services'
import HeroSlides from '../Components/HeroSlides'
import Section from '../Components/Section'
import { SectionBody , SectionTitle } from '../Components/Section'
import Grid from '../Components/Grid'
import Type from '../Components/Type'
import ProductList from '../Components/ProductList'
import { ProductData } from '../assets/fake-data/Productdata'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { getProductByType } from '../utils/handlegetData'
import { getProducts} from "../api/product"
import { getCategories } from '../api/category'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {


  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
    .then((res) => {
       console.log(res)
       setProducts(res?.data)
    })
    .catch((err) => {
      console.log(err);
    });

    getCategories()
    .then((res) => {
      console.log(res)
      setCategories(res?.data)
   })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return (
      <Helmet title = "Trang chủ" >
           <HeroSlides/>
           <Services/>

   {/* Section type start */}
            <Section  >
                <SectionBody >
                    <Grid
                     col = {4}
                     mdCol = {2}
                     smCol = {1}
                    >
                        <Type
                          img = {require('../assets/Img/spnam.png')}
                          name = {'Nam'}
                          icon = {<i className='bx bx-plus'></i>}
                          description = {[

                            {
                              displayName: "Giày Thể Thao"
                            },

                            {
                              displayName: "Áo Thể Thao"
                            },

                            {
                              displayName: "Quần Thể Thao"
                            },

                            {
                              displayName: "Đồ Bơi Nam"
                            },

                            {
                              displayName: "Xem Tất Cả"
                            },


                          ]}
                        />

                        <Type
                          img = {require('../assets/Img/sanphamnu.png')}
                          name = {'Nữ'}
                          icon = {<i className='bx bx-plus'></i>}
                          description = {[

                            {
                              displayName: "Giày Thể Thao"
                            },

                            {
                              displayName: "Áo Thể Thao"
                            },

                            {
                              displayName: "Quần & Váy"
                            },

                            {
                              displayName: "Đồ Bơi Nữ"
                            },

                            {
                              displayName: "Xem Tất Cả"
                            },


                          ]}
                        />

                       <Type
                          img = {require('../assets/Img/sanphamtreem.png')}
                          name = {'Trẻ Em'}
                          icon = {<i className='bx bx-plus'></i>}
                          description = {[

                            {
                              displayName: "Giày Thể Thao"
                            },

                            {
                              displayName: "Áo"
                            },

                            {
                              displayName: "Quần"
                            },

                            {
                              displayName: "Trang Bị Thể Thao"
                            },

                            {
                              displayName: "Đồ Bơi"
                            },

                            {
                              displayName: "Xem Tất Cả"
                            },


                          ]}
                        />

                       <Type
                          img = {require('../assets/Img/phukien.png')}
                          name = {'Phụ Kiện Thể Thao'}
                          icon = {<i className='bx bx-plus'></i>}
                          description = {[

                            {
                              displayName: "Balo & Túi"
                            },

                            {
                              displayName: "Đồng Hồ Thể Thao"
                            },

                            {
                              displayName: "Kính Mắt"
                            },

                            {
                              displayName: "Băng Bảo Vệ & Dụng Cụ Mát-Xa"
                            },

                            {
                              displayName: "Xem Tất Cả"
                            },


                          ]}
                        />
                        
                    </Grid>
                </SectionBody>
            </Section> 
   {/* Section type end */}

   {/* Section hot trend start */}

            <Section>
                <SectionTitle>
                      Sản Phẩm Hot Của Tháng
                </SectionTitle>
                     
                <SectionBody>
                     <img src={require('../assets/Img/sphot.webp')} alt="" />
                </SectionBody>
            </Section>

   {/* Section hot trend end */}

   {/* Section kinh boi start */}

   {
      categories.map((item , index) => (
        <ProductList
           item = {getProductByType(item?.name , products)}
           title = {item?.title}
           subtitle = {item?.subTitle}
        />
      ))
   }
   {/* Section kinh boi end */}

   {/* Section GYM start */}

            {/* <ProductList
              item = {ProductData.getProductByType("Gym")}
              title = {"PHÒNG GYM"}
              subtitle = {"TẠI NHÀ"}
           /> */}

   {/* Section GYM end */}

   {/* Section type start */}

            <Section>
                <SectionBody>
                    <Grid
                     col = {4}
                     mdCol = {2}
                     smCol = {1}
                    >
                        <Type
                          img = {require('../assets/Img/sanphamcamtri.png')}
                          name = {'Dụng Cụ Cắm Trái'}
                          icon = {<i className='bx bx-plus'></i>}
                        
                        />

                        <Type
                          img = {require('../assets/Img/sanphamdoboi.png')}
                          name = {'Đồ Bơi'}
                          icon = {<i className='bx bx-plus'></i>}
                         
                        />

                       <Type
                          img = {require('../assets/Img/sanphamxedap.jpg')}
                          name = {'Xe Đạp'}
                          icon = {<i className='bx bx-plus'></i>}
                        
                        />

                       <Type
                          img = {require('../assets/Img/sanphamgiaydabong.png')}
                          name = {'Giày Đá Bóng'}
                          icon = {<i className='bx bx-plus'></i>}
                        
                        />
                        
                    </Grid>
                </SectionBody>
            </Section> 

   {/* Section type end */}

   {/* Section Giay chay bo start */}
           {/* <ProductList
               item = {ProductData.getProductByType("Giay")}
               title = {"GIÀY"}
              subtitle = {"CHẠY BỘ"}
           /> */}
   {/* Section Giay chay bo end */}

   {/* Section Fitness start */}

          {/* <ProductList
               item = {ProductData.getProductByType("Fitness")}
               title = {"TẬP"}
               subtitle = {"FITNESS"}
           /> */}

   {/* Section Fitness end */}

   {/* Section banner start */}
        <Section>
           <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={15}
              slidesPerView={4}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}

              breakpoints={{

                320: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },

                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
             }}
              >


                <SwiperSlide >
                      <img src= {require('../assets/Img/bannertenis.webp')} alt="" />
                </SwiperSlide>


                <SwiperSlide>
                      <img src= {require('../assets/Img/minibannerdabanh.webp')} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                      <img src= {require('../assets/Img/minibannerdapxe.webp')} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                      <img src= {require('../assets/Img/minibannerleonui.webp')} alt="" />
                </SwiperSlide>
  
          </Swiper>
        </Section>
          
   {/* Section banner end */}

   {/* Section banner slide start */}

        <Section>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={15}
              slidesPerView={1}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
             >


                  <SwiperSlide >
                        <img src= {require('../assets/Img/slidebannerbalo.webp')} alt="" />
                  </SwiperSlide>


                  <SwiperSlide>
                        <img src= {require('../assets/Img/slidebannergiaythethao.webp')} alt="" />
                  </SwiperSlide>

                  <SwiperSlide>
                        <img src= {require('../assets/Img/slidebannerdungcu.webp')} alt="" />
                  </SwiperSlide>

            </Swiper>
        </Section>

   {/* Section banner slide end */}

   {/* Section address start */}

       <Section>
            <SectionTitle>
               Địa Chỉ Cửa Hàng Decathlon và Đối Tác Click&Collect
            </SectionTitle>

            <SectionBody>
                    <img src= {require('../assets/Img/banneradress.webp')} alt="" />
            </SectionBody>
       </Section>

   {/* Section address end */}

   {/* Section discovery start */}
       <Section>
           <SectionTitle>
                 KHÁM PHÁ THÊM
           </SectionTitle>

           <SectionBody>
                 <Grid
                   col = {2}
                   mdCol = {2}
                   smCol = {1}
                   gap = {20}
                 >
                        <div className="discovery__main">
                                <img src= {require('../assets/Img/mainbanner.webp')} alt="" />
                        </div>
                        
                        <div className="discovery__sub">
                                <div className="discovery__sub__item">
                                       <img src= {require('../assets/Img/subbbaner1.webp')} alt="" />
                                </div>

                                <div className="discovery__sub__item">
                                       <img src= {require('../assets/Img/subbanner2.webp')} alt="" />
                                </div>

                                <div className="discovery__sub__item">
                                       <img src= {require('../assets/Img/subbanner3.webp')} alt="" />
                                </div>
                        </div>
                 </Grid>
           </SectionBody>
       </Section>
   {/* Section discovery end */}

   {/* Section Contact start */}

     
      <Services/>    

   {/* Section Contact end */}

      </Helmet>
  )
}

export default Home
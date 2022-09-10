import React from 'react'
import Grid from './Grid'
import {useState} from 'react'
import { useRef } from 'react'
const SubMenu = (props) => {

  

  const SubmenutitleArray = [
    {
      displayName: 'Môn thể thao'
    },

    {
      displayName: 'Nam'
    },

    {
      displayName: 'Nữ'
    },

    {
      displayName: 'Trẻ Em'
    },

    {
      displayName: 'Phụ Kiện'
    }
  ]

  const SubmenupagesArray  = [

       {
         title: "Chạy Bộ Và Đi Bộ",
         description: [
          "Chạy Bộ",
          "Chạy Địa Hình",
          "Đi Bộ",
          "Triathlon",
         ],
         page : 0,
         position : "left"
       },

       {
         title: "Thể Thao Ngoài Trời",
         description: [
          "Hiking & Trekking",
          "Cắm Trại",
          "Quan Sát Thiên Nhiên",
          "Leo Núi Nhân Tạo",
          "Thả Diều",
          "Câu Cá",
         ], 
         page : 0,
         position : "left"
       },


       {
        title: "Các Môn Fitness",
        description: [
          "Fitness Cardio",
          "Tập Thể Hình & cross training",
          "yoga & pilates",
          "boxing & võ thuật",
          "thể dục trẻ em",
          "nhảy & ba-lê",
        ],
        page : 0,
        position : "left"
      },


      {
        title: "đạp xe & trượt ván",
        description: [
          "đạp xe",
          "patin",
          "scooters",
          "trượt ván",
        ],
        page : 0,
        position : "left"
       
      },


      {
        title: "thể thao mục tiêu",
        description: [
          "golf",
          "bắn cung giải trí",
          "ném phi tiêu",
          "đĩa ném & boomerang",
          "bi sắt",
        ],
        page : 0,
        position : "left"
      },


      {
        title: "thể thao dưới nước",
        description: [
          "bơi lội",
          "lướt sóng & lướt ván nằm",
          "lặn ống thở & lặn tự do",
          "Kayak & SUP",
          "chèo thuyền",
        ],
        page : 0,
        position : "left"
        
      },


      {
        title: "thể thao đồng đội",
        description: [
          "bóng đá & futsal",
          "bóng rổ",
          "bóng chuyển & bóng chuyền bãi biển",
          "bóng bầu dục",
          "bóng chày",
          "bóng ném",
        ],
        page : 0,
        position : "left"
      },


      {
        title: "các môn dùng vợt",
        description: [
          "cầu lông",
          "tennis",
          "bóng bàn",
          "tennis bãi biển",
        ],
        page : 0,
        position : "left"
      },

      {
        title: "sản phẩm hỗ trợ",
        description :[
          "dinh dưỡng & hỗ trợ",
        ],
        page : 0,
        position : "left"
      },

      {
        title: "Hiking Trekking",
        description : [
          "Khám Phá Ngay",
        ],
        img : require('../assets/Img/hiking menu web.jpg'),
        page : 0,
        position : "right",
      },


      {
        title: "giày dép",
        description : [
          "giày thể thao",
          "xăng-đan & dép",
          "tất",
        ],
        page : 1,
        position : "left"
      },


      {
        title: "áo",
        description : [
          "áo thun & áo không tay",
          "áo polo",
          "áo khoác",
          "áo nỉ & hoodie",
          "áo mặc trong",
        ],
        page : 1,
        position : "left"
      },


      {
        title: "quần",
        description : [
          "quần short",
          "quần dài",
          "quần bó",
          "quần lót",
        ],
        page : 1,
        position : "left"
      },


      {
        title: "đồ bơi",
        description : [
          "quần bơi",
          "áo bơi chống nắng",
          "quần đi biển",
          "wetsuit",
        ],
        page : 1,
        position : "left"
      },


      {
        title: "sản phẩm cho nam",
        description : [
          "xem thêm",
        ],
        page : 1,
        position : "right",
        img : require('../assets/Img/submenuman.jpg')
      },


      {
        title: "giày dép",
        description : [
          "giày thể thao",
          "xăng-đan & dép",
          "tất",
        ],
        page : 2,
        position : "left"
      },


      {
        title: "áo",
        description : [
          "áo thun & áo không tay",
          "áo polo",
          "áo khoác",
          "áo nỉ & hoodie",
        ],
        page : 2,
        position : "left"
      },


      {
        title: "quần",
        description : [
          "quần short & váy",
          "quần bó & leggings",
          "quần dài",
        ],
        page : 2,
        position : "left"
      },


      {
        title: "đồ lót",
        description : [
          "áo bra & quần lót thể thao",
        ],
        page : 2,
        position : "left"
      },

      {
        title: "đồ bơi",
        description : [
          "đồ bơi liền mảnh",
          "bikini",
          "áo bơi chống nắng",
          "quần đi biển",
          "wetsuit",

        ],
        page : 2,
        position : "left"
      },


      
      {
        title: "sản phẩm cho nữ",
        description : [
          "xem thêm",
        ],
        page : 2,
        position : "right",
        img : require("../assets/Img/submenuwomen.jpg")
      },

      {
        title: "giày dép",
        description : [
          "giày thể thao",
          "xăng-đan & dép",
          "tất",
        ],
        page : 3,
        position : "left"
      },

      {
        title: "áo",
        description : [
          "áo thun & áo không tay",
          "áo khoác",
          "áo nỉ & hoodie",
          "áo bra thể thao",
        ],
        page : 3,
        position : "left"
      },


      
      {
        title: "quần",
        description : [
          "quần short & váy",
          "quần dài",
          "quần bó & leggings",
          "quần lót",
        ],
        page : 3,
        position : "left"
      },


    
      {
        title: "đồ bơi",
        description : [
          "đồ bơi",
          "đồ bơi chống nắng",
        ],
        page : 3,
        position : "left"
      },


      {
        title: "trang bị thể thao",
        description : [
          "xe đạp",
          "scooter",
          "giày patin",
          "ván trượt",
          "vợt cầu lông , vợt tennis",
          "dụng cụ phát triển vận động",
        ],
        page : 3,
        position : "left"
      },


      {
        title: "tất cả sản phẩm trẻ em",
        description :[
          "xem thêm",
        ] ,
        page : 3,
        position : "right",
        img : require('../assets/Img/submenukid.jpg')
      },


      {
        title: "balo & túi",
        description :  [
          "balo",
          "túi thể thao",
          "túi đựng vợt",
          "túi chống nước",
          "túi đựng dày",
          "túi du lịch",
        ],
        page : 4,
        position : "left",
        
      },


      {
        title: "dinh dưỡng & cấp nước",
        description : [
          "bình nước & hộp thực phẩm",
          "thanh năng lượng",
        ],
        page : 4,
        position : "left",
        
      },


      {
        title: "phụ kiện điện tử",
        description : [
          "đồng hổ thể thao",
          "đèn đội đầu & đèn pin",
          "tai nghe thể thao",
          "cân sức khỏe",
          "pin & sạc dự phòng",
          "túi du lịch",
        ],
        page : 4,
        position : "left",
        
      },


      {
        title: "băng hỗ trợ & dụng cụ massage",
        description : [
          "băng bảo vệ",
          "dụng cụ massage",
          "dụng cụ phục hồi",
        ],
        page : 4,
        position : "left",
        
      },



      {
        title: "kính mát",
        description : [
          "kính mát",
        ],
        page : 4,
        position : "right",
        
      },


     



  ]

  const [indextab , setIndextab] = useState(0)

  const tabRef = useRef(null)

  const Activetab = (index) => {
       setIndextab(index)
       tabRef.current.color = "blue"
       
  }

  

  return (
      <div className= {` submenu ${props.open === true  ? "active" : '' } `} >
         <div className="submenu__left">
             <div className="submneu__left__wrapper">
               <div className="submenu__left__title__wrapper">
                  <div className="submenu__left__title">
                       {
                         SubmenutitleArray.map((item, index) => (
                          <div key = {index} ref = {tabRef} onClick={() =>Activetab(index)} className="submenu__left__title__item">
                               {item.displayName}
                          </div>
                         ))
                       }
                  </div>

               </div>

                  <div className="submenu__left__content">
                       <Grid
                         col ={5}
                        >
                       {
                       
                        SubmenupagesArray.map((item, index) => (
                          item.page === indextab && item.position == 'left' ? (
                            <div className="submenu__left__content__item" key = {index}>
                            <ul className="submenu__left__content__item__list" >
                              <h4>{item.title}</h4>
                                {
                                   item.description.map((item, index) =>(
                                     <a key = {index} >{item}</a>
                                   ))
                                }
                            </ul>
                         </div>
                          ) : " "
                             
                        ))
                      }
                       </Grid>
                     
                  </div>
             </div>
         </div>

         <div className="submenu__right">
         {
                       
                       SubmenupagesArray.map((item, index) => (
                         item.page === indextab && item.position == 'right' ? (
                        <div className="submenu__right__content" key={index}>
                          
                          {
                          item.img ?  (
                            <>
                         <div className="submenu__right__content__img">
                            <img src= {item?.img} alt="" />
                         </div>

                       <div className="submenu__right__content__text">
                           <div className="submenu__right__content__text__wrapper">
                                   <h4>{item.title}</h4>
                                   <a>{item.description}</a>

                            </div>
                     </div>
                            </>

                          ) : ""
                          }
                     
                          

                         
                         
                           
                            <ul className="submenu__right__content__list" >
                                <li className="submeu__right__content__list__item">
                                     <a>Đốt mỡ sau tết</a>
                                     <i className='bx bx-right-arrow-alt'></i>
                                </li>

                                <li className="submeu__right__content__list__item">
                                     <a>BST Thiết Kế Sinh Thái</a>
                                     <i className='bx bx-right-arrow-alt'></i>
                                </li>

                                <li className="submeu__right__content__list__item">
                                     <a>BST Sản Xuất Tại Việt Nam </a>
                                     <i className='bx bx-right-arrow-alt'></i>
                                </li>

                                <li className="submeu__right__content__list__item">
                                     <a>Sản Phẩm Giữ Ấm</a>
                                     <i className='bx bx-right-arrow-alt'></i>
                                </li>

                                <li className="submeu__right__content__list__item">
                                     <a>Khách Hàng Doanh Nghiệp</a>
                                     <i className='bx bx-right-arrow-alt'></i>
                                </li>
                                
                                <li className="submeu__right__content__list__item">
                                     <a>Danh Sách Cửa Hàng</a>
                                     <i className='bx bx-right-arrow-alt'></i>
                                </li>

                                <li className="submeu__right__content__list__item">
                                     <a href="">Liên Hệ</a>
                                     <i className='bx bx-right-arrow-alt'></i>
                                </li>
                            </ul>

                            
                          
                        </div>
                         ) : ""
                         

                          
                            
                       ))
         }

                          
         </div>
      </div>
  )
}

export default SubMenu
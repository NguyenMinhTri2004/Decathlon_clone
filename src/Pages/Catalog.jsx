import React from 'react'
import Grid from '../Components/Grid'
import {ProductData} from '../assets/fake-data/Productdata'
import ProductCart from '../Components/ProductCart'
import {Link} from 'react-router-dom'
import CatalogArray from '../assets/fake-data/Catalog'
import Sizes from '../assets/fake-data/ProductSize'
import Colors from '../assets/fake-data/ProductColor'
import Checkbox from '../Components/Checkbox'
import {useState , useEffect } from 'react'
import { useCallback } from 'react'
import {useParams} from "react-router-dom"

const Catalog = () => {

  const {name} = useParams()
  
  

 const initFilter = {
    category : [],
    color : [],
    size : []
 }

 const productList =  ProductData.getProductSimilar(name)

  
 const [products , setProducts] = useState(productList)
 
 const [filter , setFilter] = useState(initFilter)

 const filterSelect = (type , checked , item) => {
    if(checked) {
       switch(type) {
          case "CATEGORY":
            setFilter({...filter , category : [...filter.category , item.catalogslug]})
            break
          case "COLOR":
            setFilter({...filter , color : [...filter.color , item.color]})
            break
             
          case "SIZE":
            setFilter({...filter , size : [...filter.size , item.size]})
            break  
            
          default:  
       }
    } else {
       switch(type) {
          case "CATEGORY":
             const newCategory = filter.category.filter(e => e!== item.catalogslug)
             setFilter({...filter, category : newCategory})
             break

         case "COLOR":
             const newColor = filter.color.filter(e => e!== item.color)
             setFilter({...filter, color : newColor})
             break

        case "SIZE":
             const newSize = filter.size.filter(e => e!== item.size)
             setFilter({...filter, size : newSize})
             break
         default:    
       }
    }
 }

 const updateProducts = useCallback(
    () => {
       let temp = productList

       if(filter.category.length > 0) {
          temp = temp.filter(e => filter.category.includes(e.type))
         
       }


       if(filter.color.length > 0) {
          temp = temp.filter(e => {
             const check = e.colors.find(color => filter.color.includes(color))
             return check !== undefined
          })

         
       }


       if(filter.size.length > 0) {
         temp = temp.filter(e => {
            const check = e.size.find(size => filter.size.includes(size))
            return check !== undefined
         })
      }
      setProducts(temp)
    },
    [filter , productList]
 )

 useEffect(() => {
    updateProducts()
 }, [name , filter])

  return (
     <div className="catalog">

       <div className="catalog__top">
           <div className="catalog__top__item">
                  <h5>BỘ LỌC</h5>
                  <div className="catalog__top__item__img"  >
                         <img src= {require("../assets/Img/tooglesort.png")} alt=""  />
                  </div>
                  

           </div>

           <div className="catalog__top__item">
             <div className="catalog__top__item__img" >
                    <img src= {require("../assets/Img/arrowcatalog.png")} alt=""  />
             </div>
                  
                  <h6>SẮP XẾP THEO</h6>
                    <select>
                          <option>Liên Quan Nhất</option>
                          <option>Giá Tăng Dần</option>
                          <option>Giá Giảm Dần</option>
                    </select>
           </div>
       </div>

       <div className="catalog__bottom">
          <div className="catalog__filter">
             <div className="catalog__filter__wrapper">

                 <div className="catalog__filter__widget">
        <div className="catalog__filter__widget__title">
                <p>Sản Phẩm</p>
        </div>

        {
           CatalogArray.map((item, index) => (
            <div className="catalog__filter__widget__item" key = {index}>
                <Checkbox
                   onChange = {(input) => filterSelect("CATEGORY" , input.checked , item)}
                />
                <p>{item.displayName}</p>
               
           </div>       
           ))
              
        }

       
                 </div>

                  <div className="catalog__filter__widget">
        <div className="catalog__filter__widget__title">
                <p>Kích Thước</p>
        </div>

        {
           Sizes.map((item, index) => (
            <div className="catalog__filter__widget__item" key = {index}>
                <Checkbox
                     onChange = {(input) => filterSelect("SIZE" , input.checked , item)}
                />
                <p>{item.displayName}</p>
               
           </div>       
           ))
              
        }

       
                  </div>

                  <div className="catalog__filter__widget">
        <div className="catalog__filter__widget__title">
                <p>Màu Sắc</p>
        </div>

        {
           Colors.map((item, index) => (
            <div className="catalog__filter__widget__item" key = {index}>
                <Checkbox
                    onChange = {(input) => filterSelect("COLOR" , input.checked , item)}
                />
                <p>{item.displayName}</p>
               
           </div>       
           ))
              
        }

       
                 </div>

            </div>
         </div>

          <div className="catalog__content">

              <Grid
                 col = {4}
                 mdCol = {3}
                 smCol ={1}
                 gap = {5}
               >
                   {
                     products.map((item, index) => (
                           <Link to = {`/catalog/${item.slug}`} key={index}>
                               <ProductCart
                                 img = {item.image}
                                 price = {item.price}
                                 name = {item.name}
                                 rate = {item.rate}
                                discount = {item.discount}
                              />
                          </Link>
                        ))
                   }

              </Grid> 
          </div>
       </div>
         
     </div>
  )
}

export default Catalog
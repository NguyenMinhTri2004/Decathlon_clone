import React from 'react'
import {useState} from 'react'
const Type = props => {
  
  const [opendes , setOpendes]  = useState(false)
    

  return (
     
     <div className="type ">
         <div className="type__wrapper  ">
          <div className="type__content">
                <div className="type__content__main">
                    <div className="type__content__main__img">
                         <img src={props.img} ></img>
                     </div>
                      <p>{props.name}</p>
                </div>

                <div  onClick={() => setOpendes(!opendes)} className= {`type__content__icon  ${opendes === true ?  'active' : "" }`}>
                    {props.icon}
                </div>
          </div>
        </div>

        {
          props.description ? 
          ( <ul className= {`type__des ${opendes === true ?  'active' : "" }`}>
          {
               props.description.map((item , index) => (
                   <div className="type__des__wrapper" key = {index}>
                      <li>
                       { item.displayName}
                       <i className='bx bx-right-arrow-alt'></i>
                      
                      </li>
                  </div>
               ))
          }
         </ul>)
          :  ''
        }

         
    </div>
  )
}



export default Type
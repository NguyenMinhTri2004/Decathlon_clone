import {getDocs , collection , where ,query} from "firebase/firestore";
import { db } from "../../Firebase/Firebase"


export const getCartList = async  (uid) => {
    try {
       const data = []
       const q = query(
         collection(db , "cart"),
         where( "userId", "==" , uid)
       )

       const querySnapshot = await getDocs(q);

       querySnapshot.forEach((doc) => {
            data.push(doc.data());
       })
      
          return data 
    }catch (e) {
        console.log(e)
    }
}

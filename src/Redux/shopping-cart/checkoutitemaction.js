import {getDocs , collection , where ,query} from "firebase/firestore";
import { db } from "../../Firebase/Firebase"


export const getCheckoutList = async  (uid) => {
    try {
       const data = []
       const q = query(
         collection(db , "checkout"),
         where( "userId", "==" , uid)
       )

       const querySnapshot = await getDocs(q);

       querySnapshot.forEach((doc) => {
            data.push(doc.data());
       })

       return sortItem(data) 
    }catch (e) {
        console.log(e)
    }
}


const sortItem = (arr) => arr.sort((a,b) => a.key > b.key ? 1 : (a.key < b.key ? -1 : 0))
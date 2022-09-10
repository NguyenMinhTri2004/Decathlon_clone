import { setDoc , doc , getDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase"

export const changeProfile = async  (user , data) => {
      try {

        await setDoc(doc(db , "users", user.uid) , data)
        // return data

        console.log(data)

      }catch (e) {
          console.log(e)
      }
}


export const getProfile = async  (uid) => {
    try {
      const docRef = doc(db , `users/${uid}`)
      const docSnap  = await getDoc(docRef)
     
      if(docSnap.exists()){
          return docSnap.data()
      }

    }catch (e) {
        console.log(e)
    }
}
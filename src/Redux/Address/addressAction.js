import { setDoc , doc , getDocs , collection , addDoc, where ,query , deleteDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase"

export const createAddress = async  (params ,home , department ,  district , ward) => {
      try {

        const AddressList = []
   
        // const addressRef =  addDoc(collection(db , "address",) , params)
        await setDoc(doc(db, "address", home +"-"+department+"-"+district+"-"+ ward), params);

         AddressList.push(params);

        return AddressList

      }catch (e) {
          console.log(e)
      }
}


export const deleteAddress = async (home, department , district,ward) => {

  try {

    await deleteDoc(doc(db, "address", home +"-"+department+"-"+district+"-"+ward));
  }catch (e) {
     console.log(e)
  }
}


export const updateAddress = async (home, department, district , ward , homemodal , departmentmodal ,districtmodal , wardmodal ) => {

  await setDoc(doc(db, "address", home +"-"+department+"-"+district+"-"+ward), {
     
      home : homemodal,
      department : departmentmodal,
      district : districtmodal,
      ward : wardmodal,
  });
  
}


export const getAddress = async  (uid) => {
    try {
       const data = []
       const q = query(
         collection(db , "address"),
         where("uid", "==" , uid)
       )

       const querySnapshot = await getDocs(q);

       querySnapshot.forEach((doc) => {
            data.push({...doc.data(), id : doc.id});
       })

       return data

    }catch (e) {
        console.log(e)
    }
}
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";

export async function getUserInfo(user: any, values: any, animalName?: string | undefined | null) {
  const userInfo: any = [];    

  const q = query(collection (db, 'userProfile'), where('email', '==', user.email));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    userInfo.push({... doc.data(), id: doc.id})
  });
  values(
    {
      name: userInfo[0].name,
      telNumber: userInfo[0].telNumber,
      city: userInfo[0].city,
      bioMessage: userInfo[0].bioMessage,
      avatarURL: userInfo[0].avatarURL,
      selectAnimal: animalName
    }
  )
}
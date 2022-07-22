import { doc, setDoc } from "firebase/firestore";
import { db } from "./Firebase";

export async function userProfileUpdate(name: string, telNumber: string, city: string, email: string, bioMessage?: string, avatarURL?: string): Promise<void> {
  
  await setDoc(doc(db, 'userProfile', email), {
    name,
    telNumber,
    city,
    email,
    bioMessage,
    avatarURL
  },
  { merge: true })
}
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "./Firebase";
import { v4 } from 'uuid';

export async function createNewMessage(name: string, telNumber: string, animalName: string, message: string, email: string, created_at: Date) {
    await setDoc(doc(db, 'adoptionMessage', v4()), {
      name,
      telNumber,
      animalName,
      message,
      email,
      created_at
    },
    { merge: true })
}
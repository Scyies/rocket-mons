import { setDoc, doc } from "firebase/firestore";
import { db } from "./Firebase";
import { v4 } from 'uuid';

export async function createNewMessage(name: string, telNumber: string, animalName: string, message: string, email: string) {
    await setDoc(doc(db, 'adoptionMessage', v4()), {
      name,
      telNumber,
      animalName,
      message,
      email
    },
    { merge: true }).then(() => {
      alert('Sua mensagem foi enviada com sucesso!');
    })
}
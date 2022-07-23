import { setDoc, doc } from "firebase/firestore";
import { db } from "./Firebase";

export async function createNewMessage(name: string, telNumber: string, animalName: string, message: string, email: string) {
    await setDoc(doc(db, 'adoptionMessage', email), {
      name,
      telNumber,
      animalName,
      message
    }).then(() => {
      alert('Sua mensagem foi enviada com sucesso!');
    })
}
import { doc, setDoc } from 'firebase/firestore';
import { db } from './Firebase';

export function userProfileCreation(name: string, email: string): void {
  try {
    setDoc(doc(db, 'userProfile', email), {
      name,
      email
    });
  } catch (error: any) {
    console.log(error.message); 
  }
}

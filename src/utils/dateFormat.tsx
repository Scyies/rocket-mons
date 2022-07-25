import { Timestamp } from "firebase/firestore";

export function dateFormat(date: Timestamp) {
  if (date){
    const data = new Date(date.toDate());

    const day = data.toLocaleDateString('pt-BR');
    const hour = data.toLocaleTimeString('pt-BR');

    return `${day} às ${hour}`
  }
}
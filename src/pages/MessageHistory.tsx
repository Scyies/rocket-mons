import { collection, DocumentData, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import { ChatTeardropText } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MessageCard } from "../components/MessageCard";
import { db } from "../firebase/Firebase";
import { useUserAuth } from "../firebase/UserAuthContext";

export function MessageHistory() {
  const [messages, setMessages]: any = useState([]);

  const { user } = useUserAuth();

  async function getMessageHistory() {
    const messageInfo: DocumentData[] = [];

    const q = query(collection (db, 'adoptionMessage'), where('email', '==', user.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      messageInfo.push(doc.data());
    });

    if(messageInfo.length > 0) {
      setMessages(messageInfo)
    } 
  }
  
  useEffect(() => {
    if(user) {getMessageHistory()}
  },[]);

  return(
    <div className="min-h-screen h-full flex flex-col justify-between">
      <Header />

      <main className='flex flex-col flex-grow bg-gray-300 mx-6 rounded-md h-full mb-5 w-[95%] md:w-[80%] max-w-[312px] md:max-w-[550px] self-center'>

        <div className="flex justify-between p-1 pb-5 md:p-5 m-5 border-b border-b-gray-500">
          <h1 className='text-blue-500 font-bold pt-1 md:pt-2'>Histórico de mensagens</h1>
          <Link to="/adopt/adoption-message=0">
            <Button name='Nova mensagem' />
          </Link>
        </div>

        <section className='md:mx-5 mb-4'>
          { messages.length > 0 ? (messages.map((message: { animalName: string; message: string; created_at: any; uid: any }): any => (
            <MessageCard 
              animalName={message.animalName} 
              adoptionMessage={message.message}
              createdAt={message.created_at}
              key={message.uid}
            />
            ))) : 
            (<div className="text-blue-500 flex flex-col place-items-center">
              <ChatTeardropText size={32} />
              <p>Você não envio nenhuma mensagem ainda</p>
            </div>)
          }
        </section>

      </main>
      
      <Footer />
    </div>
  )
}

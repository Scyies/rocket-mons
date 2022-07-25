import { collection, getDocs, query, where } from "firebase/firestore";
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
    const messageInfo: any = [];

    const q = query(collection (db, 'adoptionMessage'), where('email', '==', user.email));

    const querySnapshot: any = await getDocs(q);
    querySnapshot.forEach((doc: any) => {
      messageInfo.push(doc.data());
    });

    if(messageInfo.length > 0) {
      setMessages(messageInfo)
    }

  }
  console.log(messages);
  
  useEffect(() => {
    if(user) {getMessageHistory()}
  },[]);

  return(
    <div className="min-h-screen h-full flex flex-col justify-between">
      <Header />

      <main className='flex flex-col flex-grow bg-gray-300 mx-6 rounded-md h-full mb-5 w-[95%] md:w-[80%] max-w-[312px] md:max-w-[550px] self-center'>

        <div className="flex justify-between p-1 pb-5 md:p-5 m-5 border-b border-b-gray-500">
          <h1 className='text-blue-500 font-bold pt-1 md:pt-2'>Histórico de mensagens</h1>
          <Link to="/adopt/adoption-message">
            <Button name='Nova mensagem' />
          </Link>
        </div>

        <section className='md:mx-6 mb-4'>
          {messages.map((message: { animalName: string; message: string; created_at: any; uid: any }): any => (
            <MessageCard 
              animalName={message.animalName} 
              adoptionMessage={message.message}
              createdAt={message.created_at}
              key={message.uid}
            />
          ))}
        </section>

      </main>
      
      <Footer />
    </div>
  )
}

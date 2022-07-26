import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { useEffect, useState } from "react";
import { Animals } from "../interfaces/Interfaces";

interface QueryTypes {
  imageURL: string; 
  name: string; 
  age: string; 
  size: string; 
  behavior: string; 
  location: string; 
  id: string
}

export function Adopt() {
  const [animalsList, setAnimalsList]: any = useState([]);
  const [isLoading, setIsLoading] = useState(false);  

  async function getAnimalsInfo() {
    const animals: Animals[] = []
    setIsLoading(true);

    try {
      const docs = await getDocs(collection(db, 'animals')).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          animals.push({... doc.data(), id: doc.id})
        });
        setAnimalsList([... animals]);        
        setIsLoading(false);
      })  
    } catch (error: any) {
      setIsLoading(false);
      console.log(error.message);      
    }
  }

  useEffect(() => {
    getAnimalsInfo()
  },[]);
  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="px-16 pb-4">
        <p className="text-blue-500 text-center">
          Olá! Veja os amigos disponíveis para adoção!
        </p>
      </div>
      { isLoading ? <Loading /> :
        <section className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mx-8 lg:mx-[10%]">
        {animalsList.map((doc: QueryTypes) => (
          <Card img={doc.imageURL}
            name={doc.name}
            age={doc.age}
            size={doc.size}
            behavior={doc.behavior}
            location={doc.location}
            key={doc.id}
            id={doc.id}
          />)
        )}
      </section>}
      <Footer />
    </div>
  )
}

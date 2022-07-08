import { gql, useQuery } from "@apollo/client";
import { Key } from "react";
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

const GET_ANIMAL_INFO = gql`
  query GetAnimals {
    animals {
      age
      behavior
      id
      location
      name
      size
      imageUrl
    }
  }
`

interface QueryTypes {
  imageUrl: string; 
  name: string; 
  age: string; 
  size: string; 
  behavior: string; 
  location: string; 
  id: string
}

export function Adopt() {
  const { loading, error, data } = useQuery(GET_ANIMAL_INFO);
  if(loading) return (<>Loading...</>);
  if(error) return (<>Error: {error}</>);
  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="px-16 pb-4">
        <p className="text-blue-500 text-center">
          Olá! Veja os amigos disponíveis para adoção!
        </p>
      </div>
      <section className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mx-8 lg:mx-[10%]">
        {data.animals.map((cardInfo: QueryTypes) => (
          <Card img={cardInfo.imageUrl}
            name={cardInfo.name}
            age={cardInfo.age}
            size={cardInfo.size}
            behavior={cardInfo.behavior}
            location={cardInfo.location}
            key={cardInfo.id}
          />
          )
        )}
      </section>
      <Footer />
    </div>
  )
}


//flex flex-col flex-wrap md:flex-row md:gap-4 justify-center min-h-full flex-1 md:mx-auto
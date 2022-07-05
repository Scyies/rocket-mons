import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function Adopt() {
  return (
    <div>
      <Header />
      <div className="pt-16 px-16 pb-4">
        <p className="text-blue-500 text-center">
          Olá! Veja os amigos disponíveis para adoção!
        </p>
      </div>
      <section>
        <Card />
      </section>
      <Footer />
    </div>
  )
}
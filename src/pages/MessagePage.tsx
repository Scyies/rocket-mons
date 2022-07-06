import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Input } from "../components/Inputs";

export function MessagePage() {
  return (
    <div>
      <Header />

      <h2 className="text-blue-500 px-16 pt-14 pb-6 text-center">
        Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
      </h2>

      <form action=""
        className="flex flex-col justify-center mx-6 bg-gray-300 rounded-md text-left place-items-center py-8 mb-4"
      >
        <div className="flex flex-col pb-4">
          <label htmlFor="message"
            className="text-blue-500 pb-1 font-semibold"
          >
            Nome
          </label>
          <Input name="Nome" holder="Insira seu nome completo" type="text" />
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="message"
              className="text-blue-500 pb-1 font-semibold"
          >
              Telefone
          </label>
          <Input name="Telefone" holder="Insira seu telefone e/ou whatsapp" type="tel" />
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="message"
              className="text-blue-500 pb-1 font-semibold"
          >
              Nome do animal
          </label>
          <Input name="Nome do animal" holder="Por qual animal você se interessou?" type="text" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message"
            className="text-blue-500 pb-4 font-semibold"
          >
            Mensagem
          </label>
          <textarea name="message" id="message" 
            cols={15} rows={5} 
            placeholder="Escreva sua mensagem"
            className="w-[336px] md:w-[361px] rounded-md mb-8 pl-4 pt-4 shadow-md"
          >
          </textarea>
        </div>

        <Button name="Enviar" />
      </form>

      <Footer />
    </div>
  )
}
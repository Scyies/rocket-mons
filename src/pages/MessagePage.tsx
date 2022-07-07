import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Input } from "../components/Inputs";

export function MessagePage() {

  function handleSubmit() {
    alert('submit')
  }

  return (
    <div className="min-h-screen">
      <Header />

      <h2 className="text-blue-500 px-16 pt-14 pb-6 text-center">
        Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
      </h2>

      <form action=""
        className="flex flex-col m-auto px-4 bg-gray-300 rounded-md place-items-center py-8 mb-12 max-w-[550px] self-center"
      >
        <div className="flex flex-col pb-4 w-full">
          <label htmlFor="message"
            className="text-blue-500 pb-1 font-semibold"
          >
            Nome
          </label>
          <Input name="Nome" holder="Insira seu nome completo" type="text" />
        </div>

        <div className="flex flex-col pb-4 w-full">
          <label htmlFor="message"
              className="text-blue-500 pb-1 font-semibold"
          >
              Telefone
          </label>
          <Input name="Telefone" holder="Insira seu telefone e/ou whatsapp" type="tel" />
        </div>

        <div className="flex flex-col pb-4 w-full">
          <label htmlFor="message"
              className="text-blue-500 pb-1 font-semibold"
          >
              Nome do animal
          </label>
          <Input name="Nome do animal" holder="Por qual animal você se interessou?" type="text" />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="message"
            className="text-blue-500 pb-4 font-semibold"
          >
            Mensagem
          </label>
          <textarea name="message" id="message" 
            cols={15} rows={5} 
            placeholder="Escreva sua mensagem"
            className="rounded-md mb-8 pl-4 pt-4 shadow-md min-w-[240px] max-w-[336px] md:max-w-[492px]"
          >
          </textarea>
        </div>

        <Button name="Enviar" click={handleSubmit} />
      </form>

      <Footer />
    </div>
  )
}
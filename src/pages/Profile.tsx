import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import defaultProfile from '../assets/prof-icon.svg';
import { Input } from "../components/Inputs";
import { Button } from "../components/Button";

export function Profile() {

  function handleSave() {
    alert('saved data');
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="md:bg-right-img md:bg-right md:bg-contain bg-no-repeat flex flex-col">

        <h2 className="text-blue-500 px-16 pt-14 pb-6 text-center">
          Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
        </h2>

        <section className="bg-gray-300 flex flex-col mx-6 mb-4 rounded-md px-4 py-8 place-items-center w-[95%] md:w-[80%] max-w-[550px] self-center">
          <h2 className="text-gray-900 font-semibold text-center mb-4">
            Perfil
          </h2>

          <div className="flex flex-col pb-1 w-full">
            <label
              className="text-blue-500 pb-1 font-semibold"
            >
              Foto
            </label>
            <div className="flex flex-col place-items-center">
              <img src={defaultProfile} alt=""
                className="w-20 mb-1"
              />
              <span className="text-red-500 text-xs pb-6 hover:underline">
                Clique na foto para editar
              </span>
            </div>
          </div>

          <div className="flex flex-col pb-4 w-full">
            <label
              className="text-blue-500 pb-1 font-semibold"
            >
              Nome
            </label>
            <Input name="Nome" type="text" />
          </div>

          <div className="flex flex-col pb-4 w-full">
            <label
              className="text-blue-500 pb-1 font-semibold"
            >
              Telefone
            </label>
            <Input name="tel" type="tel" />
          </div>

          <div className="flex flex-col pb-4 w-full">
            <label
              className="text-blue-500 pb-1 font-semibold"
            >
              Cidade
            </label>
            <Input name="cidade" type="text" />
          </div>

          <div className="flex flex-col w-full">
            <label
              className="text-blue-500 pb-4 font-semibold"
            >
              Sobre
            </label>
            <textarea name="message" id="message" 
              cols={15} rows={5} 
              placeholder="Escreva sua mensagem"
              className="rounded-md mb-8 pl-4 pt-4 shadow-md min-w-[240px] max-w-[336px] md:max-w-[492px] self-center w-full"
            >
            </textarea>
          </div>

          <Button name="Salvar" click={handleSave} />
        </section>
      </main>

      <Footer />
    </div>
  )
}
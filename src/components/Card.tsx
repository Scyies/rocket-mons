import { ChatDots } from "phosphor-react"
import defaultDog from '../assets/default-dog.png'

export function Card() {
  return (
    <div className="bg-gray-300 flex mt-4">
      <img src={defaultDog} alt=""
        className="py-6 pl-6 pr-4"
      />
      <div>
        <h2 className="text-blue-500 font-semibold pt-4 pb-2">
          Nome
        </h2>
        <ul className="text-gray-900 pb-8">
          <li>idade</li>
          <li>porte</li>
          <li>comportamento</li>
        </ul>
        <p className="text-gray-900 text-sm mb-2">
          localidade
        </p>
        <div className="text-gray-900 flex mb-4 group cursor-pointer">
          <div className="text-green-500 mr-2 cursor-pointer">
            <ChatDots size={22} />
          </div>
          <a href="#"
          className="text-xs pt-1 cursor-pointer"
          >
            Falar com responsável
          </a>
        </div>
      </div>
    </div>
  )
}
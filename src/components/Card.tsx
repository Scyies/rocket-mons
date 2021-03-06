import { ChatDots } from "phosphor-react"
import { useNavigate } from "react-router-dom"

interface PropsInfo {
  name: string,
  age: string,
  size: string,
  behavior: string,
  location: string,
  img: string,
  id: any
}

export function Card(props: PropsInfo) {

  const navigate = useNavigate();

  function handleMessageClick() {
    sessionStorage.setItem('selectedAnimal', props.name);
    navigate(`/adopt/adoption-message=${props.id}`)
  }

  return (
    <div className="bg-gray-300 flex max-h-full w-full animate-cardRender transition-all">
      <div className="py-6 pl-6 pr-4">  
        <img src={props.img} alt=""
          className="h-[148px]"
        />
      </div>
      <div>
        <h2 className="text-blue-500 font-semibold pt-4 pb-2">
          {props.name}
        </h2>
        <ul className="text-gray-900 pb-8">
          <li>{props.age}</li>
          <li>{props.size}</li>
          <li>{props.behavior}</li>
        </ul>
        <p className="text-gray-900 text-sm mb-2">
          {props.location}
        </p>
        <div className="text-gray-900 flex mb-4 group cursor-pointer">
          <div className="text-green-500 mr-2 cursor-pointer">
            <ChatDots size={22} />
          </div>
          <i 
            onClick={handleMessageClick}
            className="text-xs pt-1 cursor-pointer"
          >
            Falar com responsável
          </i>
        </div>
      </div>
    </div>
  )
}
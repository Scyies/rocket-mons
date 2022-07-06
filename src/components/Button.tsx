import { MouseEventHandler } from "react"

interface PropsName {
  name: string,
  click?: MouseEventHandler
}

export function Button(props: PropsName) {
  return (
      <button 
        className="bg-red-500 m-2 py-2 px-2 rounded-md shadow-md w-[180px] text-white font-semibold hover:bg-red-400 transition-colors z-20"
        onClick={props.click}
      >
        {props.name}
      </button>
  )
}
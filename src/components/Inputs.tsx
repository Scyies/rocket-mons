import { ChangeEvent, ChangeEventHandler } from "react"

interface PropsItems{
  name: string,
  type: string,
  holder?: string,
  value?: string,
  change?: ChangeEventHandler,
  padrao?: string
}

export function Input(props: PropsItems) {
  return (
      <input 
        type={props.type} 
        placeholder={props.holder}
        className="min-w-[240px] max-w-[336px] md:max-w-[492px] rounded-md shadow-md pl-4 py-3"
        value={props.value}
        onChange={props.change}
        name={props.name}
        pattern={props.padrao}
      />
  )
}
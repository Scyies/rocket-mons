import classNames from "classnames"
import { ChangeEvent, ChangeEventHandler } from "react"

interface PropsItems{
  name: string,
  type: string,
  holder?: string,
  value?: string,
  change?: ChangeEventHandler, //isso vai passar a ser obrigatório depois, lembrar de mudar
  padrao?: string,
  textcenter?: string
}

export function Input(props: PropsItems) {
  return (
      <input 
        type={props.type} 
        placeholder={props.holder}
        className={classNames(`min-w-[240px] max-w-[336px] md:max-w-[344px] w-full rounded-md shadow-md px-4 py-3 self-center placeholder-gray-500 ${props.textcenter}`, {
          'lg:w-[550px]': props.name === 'nome' || props.name === 'email'
        })}
        value={props.value}
        onChange={props.change}
        name={props.name}
        pattern={props.padrao}
      />
  )
}
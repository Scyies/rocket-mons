import classNames from "classnames"
import { ChangeEventHandler, FormEvent, LegacyRef } from "react"
import { telMask } from "../utils/masks"

interface PropsItems{
  name: string,
  type: string,
  holder?: string,
  value?: any,
  change?: ChangeEventHandler | any,
  padrao?: string,
  textcenter?: string,
  required?: boolean,
  ref?: LegacyRef<HTMLInputElement>,
  id?: string,
  mask?: any,
}

export function Input(props: PropsItems) {
  function handleKeyUp(e: FormEvent<HTMLInputElement>) {
    if(props.mask){
      telMask(e)
    } else return
  }

  return (
      <input 
        type={props.type} 
        placeholder={props.holder}
        className={classNames(`min-w-[240px] max-w-[336px] md:max-w-[492px] w-full rounded-md shadow-md px-4 py-3 self-center placeholder-gray-500 z-10 ${props.textcenter}`, {
          'lg:w-[550px]': props.name === 'nome' || props.name === 'email'
        })}
        defaultValue={props.value}
        onChange={props.change}
        name={props.name}
        pattern={props.padrao}
        required={props.required}
        autoComplete="off"
        ref={props.ref}
        id={props.id}
        onKeyUp={handleKeyUp}
      />
  )
}
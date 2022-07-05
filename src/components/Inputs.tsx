interface PropsItems{
  name: string,
  type: string,
  holder: string,
  id: string  
}

export function Input(props: PropsItems) {
  return (
    <div className="flex flex-col place-items-center text-center pb-5">
      <label htmlFor={props.id}
        className="text-gray-900 pb-1"
      >
        {props.name}
      </label>
      <input 
        type={props.type} 
        placeholder={props.holder}
        className="w-[336px] md:w-[361px] h-[40px] text-center rounded-md shadow-md"
        id={props.id}
      />
    </div>
  )
}
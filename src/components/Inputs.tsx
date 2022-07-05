interface PropsItems{
  name: string,
  type: string,
  holder: string,
}

export function Input(props: PropsItems) {
  return (
      <input 
        type={props.type} 
        placeholder={props.holder}
        className="w-[336px] md:w-[361px] rounded-md shadow-md pl-4 py-3"
      />
  )
}
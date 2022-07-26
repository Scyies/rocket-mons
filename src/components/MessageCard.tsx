import { Timestamp } from "firebase/firestore";
import { Trash } from "phosphor-react";
import { dateFormat } from "../utils/dateFormat";

interface Props {
  animalName: string;
  adoptionMessage: string;
  key: string;
  id: any;
  createdAt?: Timestamp;
  answer?: string;
  delete: any;
}

export function MessageCard(props: Props) {  

  return (
    <div className='bg-gray-500 rounded-md p-3 m-5 border-b-2 border-b-gray-700 shadow-md relative'>
      <h2 className="text-blue-500 font-bold pb-1 pl-1 border-b border-b-gray-700">
        {props.animalName}
      </h2>
      <p className='text-gray-700 py-3 pl-1 border-b border-b-gray-700'>
        {props.adoptionMessage}
      </p>
      <p className='text-gray-700 text-xs pt-2 pl-1'>
        {dateFormat(props.createdAt!)}
      </p>
      <i className='absolute top-3 right-3 text-gray-700 cursor-pointer hover:text-red-500 active:scale-[0.95]' onClick={props.delete}>
        <Trash size={24} id={props.id} />
      </i>
    </div>
  )
}
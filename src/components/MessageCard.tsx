import { Timestamp } from "firebase/firestore";
import { dateFormat } from "../utils/dateFormat";

interface Props {
  animalName: string;
  adoptionMessage: string;
  createdAt?: Timestamp;
  answer?: string;
}

export function MessageCard(props: Props) {
  return (
    <div className='bg-gray-500 rounded-md p-3 m-5 border-b-2 border-b-gray-700 shadow-md'>
      <h2 className="text-gray-700 font-bold pb-1 pl-1 border-b border-b-gray-700">
        {props.animalName}
      </h2>
      <p className='text-gray-700 py-3 pl-1 border-b border-b-gray-700'>
        {props.adoptionMessage}
      </p>
      <p className='text-gray-700 text-xs pt-2 pl-1'>
        {dateFormat(props.createdAt!)}
      </p>
    </div>
  )
}
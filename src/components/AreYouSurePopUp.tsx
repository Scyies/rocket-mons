import { Button } from "./Button";
import topImg from '../assets/top-img.svg';

interface Props {
  onClickDel: (e: any) => void;
  onClickBack: () => void;
  message: string;
}

export function AreYouSurePopUp(props: Props) {
  return (
    <main className="min-h-screen h-full w-full bg-gray-700 bg-opacity-50 fixed z-[60] overflow-auto">
      <div className="flex flex-col align-middle justify-center absolute top-[30%] left-[10%] right-[10%] md:left-[30%] md:right-[30%] lg:left-[35%] lg:right-[35%] bg-white rounded-md z-50 shadow-md overflow-hidden p-2">
      <img src={topImg} 
        alt=""
        className='top-0 absolute left-0 w-[40%] pointer-events-none z-0'
      />
        <div className='z-40 flex flex-col place-items-center overflow-hidden h-full justify-around'>
          <p className="z-30 text-gray-900 font-bold mt-4 mb-4 text-center p-3">{props.message}</p>
          <div className="relative overflow-hidden rounded-md m-3 mt-0">
            <div className='flex justify-around w-full'>
              <div className='mx-3'>
                <Button name='Deletar' click={props.onClickDel} />
              </div>
              <div className='mx-3'>
                <Button name='Voltar' click={props.onClickBack} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
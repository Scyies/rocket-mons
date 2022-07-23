import { useEffect, useState } from "react";

interface Props {
  error: string;
}

export function ErrorMessage(props: Props){
  const [error, setError] = useState('');

  useEffect(() => {
    setError(props.error);
  },[props.error])

  return (
    <div className='my-2 bg-red-200 border-2 border-red-500 px-4 py-3 rounded-md shadow-md'>
      <p className='text-red-500'>
        {error}
      </p>
    </div>
  )
}
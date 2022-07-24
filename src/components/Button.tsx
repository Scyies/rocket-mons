import classNames from "classnames";
import { MouseEventHandler } from "react"
import { Loading } from "./Loading";

interface PropsName {
  name: string,
  click?: MouseEventHandler,
  loading?: boolean
}

export function Button(props: PropsName) {
  return (
      <button 
        className={classNames("bg-red-500 py-2 rounded-md shadow-md w-[180px] text-white font-semibold hover:bg-red-400 transition-colors z-20",
          {'disabled:opacity-50': props.loading,
            '': !props.loading
          }
        )}
        onClick={props.click}
        type="submit"
      >
        { props.loading ? <Loading /> : props.name }
      </button>
  )
}
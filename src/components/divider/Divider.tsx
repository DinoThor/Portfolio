import React from "react";

function Divider(props: {Label?: string}) {
  return (
    <div className="relative flex py-5 items-center">
      {props.Label === undefined
        ?
        <>
          <div className="w-full border-t border-gray-400"></div>
        </>
        :
        <>
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 font-bold text-4xl">{props.Label}</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </>
      }
    </div>
  )
}

export default Divider;
function Divider({ Label }) {
  return (
    <div class="relative flex py-5 items-center">
      {Label == undefined
        ?
        <>
          <div class="w-full border-t border-gray-400"></div>
        </>
        :
        <>
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400 font-bold text-4xl">{Label}</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </>
      }
    </div>
  )
}

export default Divider;
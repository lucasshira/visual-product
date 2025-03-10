export function Language() {
  return (
    <div className="md:h-20 h-15 flex justify-center m-10 gap-8 items-center border-t border-b border-gray-300">
      <h1 className="underline cursor-pointer text-[14px] md:text-[16px]">English</h1>
      <h1 className="relative before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-sm cursor-pointer text-[14px] md:text-[16px]">Español</h1>
      <h1 className="relative before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-sm cursor-pointer text-[14px] md:text-[16px]">Francais</h1>
    </div>
  )
}
export function Language() {
  return (
    <div className="h-20 flex justify-center m-10 gap-8 items-center border-t border-b border-gray-300">
      <h1 className="underline cursor-pointer">English</h1>
      <h1 className="relative before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-sm cursor-pointer">Español</h1>
      <h1 className="relative before:content-['•'] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:text-sm cursor-pointer">Francais</h1>
    </div>
  )
}
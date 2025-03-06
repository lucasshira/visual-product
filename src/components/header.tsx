export function Header() {
  return (
    <div className="bg-white">
      <header className="h-[98px] flex items-center mx-[108px] justify-between py-4">
      <h2 className=" text-[32px]">Visual Product</h2>
        <nav className="flex items-center justify-between">
          <ul className="flex gap-8 mr-7 text-sm">
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Home</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">About</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Blog</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Contact</li>
          </ul>
        <button className="w-[166px] h-[54px] bg-black text-white font-bold cursor-pointer hover:bg-gray-900">Get started</button>
        </nav>
      </header>
    </div>
  )
}
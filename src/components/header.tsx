export function Header() {
  return (
    <header className="max-h-[86px] flex items-center mx-[108px] justify-between py-4">
      <h1 className="font-mono text-[32px]">Visual Product</h1>
        <nav className="flex items-center justify-between">
          <ul className="flex gap-8 mr-7 text-sm font-mono">
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Home</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">About</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Blog</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Contact</li>
          </ul>
        <button className="w-[166px] h-[54px] bg-black text-white font-bold cursor-pointer hover:bg-gray-900">Get started</button>
        </nav>
    </header>
  )
}
export function Header() {
  return (
    <div className="bg-white w-full">
      <header className="h-[98px] flex items-center justify-between px-4 sm:px-8 md:px-[108px] py-4 w-full">
        <h2 className="text-[24px] md:text-[32px]">Visual Product</h2>
        <nav className="flex items-center justify-between">
          <ul className="hidden md:flex gap-8 mr-7 text-sm">
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Home</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">About</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Blog</li>
            <li className="cursor-pointer hover:text-gray-900 hover:underline">Contact</li>
          </ul>
          <button className="w-[120px] h-[40px] md:w-[166px] md:h-[54px] bg-black text-white font-bold cursor-pointer hover:bg-gray-900">
            Get started
          </button>
        </nav>
      </header>
    </div>
  );
}
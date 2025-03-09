export function DashboardWithoutImage() {
  return (
    <div className="h-auto bg-black py-6 px-4 sm:px-6 md:px-12 lg:px-[108px] lg:h-[426px] flex items-center justify-center">
      <div className="md:px-[325px] px-2 text-center">
        <h1 className="font-bold text-white leading-[42px] text-[32px] md:text-[42px]">A dedicated team to grow your company</h1>
        <p className="mt-2.5 mb-12 leading-6 text-white">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
        
        <div className="flex flex-wrap-4 justify-center">
          <button 
            className="flex items-center mr-7 h-[54px] text-white font-bold px-[38px] py-[17px] text-[14px] sm:text-[16px] cursor-pointer border border-white bg-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              Get started
          </button>
          <button className="flex items-center px-9 py-[17px] h-[54px] text-[14px] sm:text-[16px] bg-white text-black rounded-[48px] border border-black cursor-pointer">Talk to sales
          </button>
        </div>
      </div>
    </div>
  )
}
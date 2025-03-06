interface DashboardBlackProps {
  image?: string
}

export function DashboardBlack({ image }: DashboardBlackProps) {
  return (
    <div className={`h-auto bg-black py-8 px-4 sm:px-6 md:px-12 lg:px-[108px] flex flex-col lg:flex-row items-center justify-between text-white ${image === 'people' ? "lg:h-[480px]" : "lg:h-[583px]"}`}>
      {image === 'people' ? (
        <img src="/dashboard/people.png" alt="People" className="w-full max-w-[563px]" />
      ) : (
        <img src="/dashboard/thinking.png" alt="Thinking" className="w-full max-w-[564px]" />
      )}
        <div className="w-full lg:pl-[63px]">
          <h1 className="font-bold leading-[42px] text-[42px]">A dedicated team to grow your company</h1>
          <p className="mt-2.5 mb-12 leading-5">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
        <div className="flex flex-wrap-4">
          <button 
            className="flex items-center mr-7 h-[54px] font-bold px-[38px] py-[17px] cursor-pointer border border-white bg-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              Get started
          </button>
          <button className="flex items-center px-9 py-[17px] h-[54px] bg-white text-black rounded-[48px] border border-black cursor-pointer">Talk to sales
          </button>
        </div>
      </div>
    </div>
  )
}
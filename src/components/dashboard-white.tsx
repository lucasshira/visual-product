interface DashboardWhiteProps {
  image?: string;
}

export function DashboardWhite({ image }: DashboardWhiteProps) {
  return (
    <div className="h-auto px-6 md:px-16 lg:px-[162px] py-[80px] bg-white text-center">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-[60%] text-left">
          <h1 className="font-bold text-[32px] md:text-[42px] leading-[42px]">A dedicated team to grow your company</h1>
          <p className="mt-2.5 mb-12 leading-5 text-[#333]">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
          <div className="flex flex-wrap">
            <button 
                className="flex items-center mr-7 h-[54px] text-white font-bold px-[38px] py-[17px] cursor-pointer bg-black hover:bg-gray-900">
                  Get started
            </button>
            <button className="flex items-center px-9 py-[17px] h-[54px] bg-white text-black rounded-[48px] border border-black cursor-pointer">Talk to sales
            </button>
          </div>
        </div>
        {image === 'team' ? (
          <img src="/dashboard/team.png" alt="Team Work" />
        ) : (
          <img src="/dashboard/attendant-girl.png" alt="Attendant Girl" />
        )}
      </div>
    </div>
  )
}
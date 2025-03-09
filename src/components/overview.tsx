export function Overview() {
  const titleStyle = "font-bold lg:text-2xl sm:text-sm mt-[20px] mb-[10px]"

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 py-6 px-4 sm:py-8 sm:px-6 lg:h-[336px] bg-white lg:py-[80px] lg:px-[108px] w-full">
      <div>
        <div className="flex gap-4 pb-4 sm:block sm:pb-0">
          <img src="/overview/mobile-app.png" alt="Mobile" className="size-[56px] rounded-sm" />
          <h1 className={titleStyle}>Mobile app</h1>
        </div>
        <p className="leading-5 mr-[16px] text-[#333333] lg:text-[16px] sm:text-[12px]">Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis volutpat est velitolm.</p>
      </div>

      <div>
        <div className="flex gap-4 pb-4 sm:block sm:pb-0">
          <img src="/overview/desktop-app.png" alt="Desktop" className="size-[56px] rounded-sm" />
          <h1 className={titleStyle}>Desktop app</h1>
        </div>
          <p className="leading-5 mr-[16px] text-[#333333] lg:text-[16px] sm:text-[12px]">Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis volutpat est velitolm.</p>
      </div>

      <div>
        <div className="flex gap-4 pb-4 sm:block sm:pb-0">
          <img src="/overview/multiple-users.png" alt="Users" className="size-[56px] rounded-sm" />
          <h1 className={titleStyle}>Multiple users</h1>
        </div>
        <p className="leading-5 mr-[16px] text-[#333333] lg:text-[16px] sm:text-[12px]">Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis volutpat est velitolm.</p>
      </div>
    </div>
  )
}
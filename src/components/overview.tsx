export function Overview() {
  const titleStyle = "font-bold text-2xl mt-[20px] mb-[10px]"

  return (
    <div className="grid grid-cols-3 h-[336px] bg-white py-[80px] px-[108px]">
      <div>
        <img src="/overview/mobile-app.png" alt="Mobile" className="size-[56px] rounded-sm" />
        <h1 className={titleStyle}>Mobile app</h1>
        <p className="leading-5 mr-[16px] text-[#333333]">Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis volutpat est velitolm.</p>
      </div>

      <div>
        <img src="/overview/desktop-app.png" alt="Desktop" className="size-[56px] rounded-sm" />
        <h1 className={titleStyle}>Desktop app</h1>
        <p className="leading-5 mr-[16px] text-[#333333]">Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis volutpat est velitolm.</p>
      </div>

      <div>
        <img src="/overview/multiple-users.png" alt="Users" className="size-[56px] rounded-sm" />
        <h1 className={titleStyle}>Multiple users</h1>
        <p className="leading-5 mr-[16px] text-[#333333]">Lorem ipsum dolor sit amet consecte turole adipiscing elit semper dalaracc lacus velolte facilisis volutpat est velitolm.</p>
      </div>
    </div>
  )
}
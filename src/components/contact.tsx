export function Contact() {
  const titleStyle: string = "sm:pb-[26px] pb-3 mb-3 font-semibold lg:text-xl text-[14px]"
  const listStyle: string = "lg:text-[18px] text-[14px] text-[#333945] hover:underline cursor-pointer"

  return (
    <div className="md:h-[248px] h-auto grid md:grid-cols-5 grid-cols-2 gap-8">
      <div>
        <h1 className={titleStyle}>INTEGRATIONS</h1>
        <ul className="md:space-y-3.5 space-y-3">
          <li className={listStyle}>Pricing</li>
          <li className={listStyle}>Integrations</li>
          <li className={listStyle}>Affilliate Programs</li>
          <li className={listStyle}>Agency Partners</li>
        </ul>
      </div>

      <div>
        <h1 className={titleStyle}>MARKETING</h1>
        <ul className="md:space-y-3.5 space-y-3">
          <li className={listStyle}>Entrepreneur</li>
          <li className={listStyle}>Online marketer</li>
          <li className={listStyle}>Marketing manager</li>
        </ul>
      </div>

      <div>
        <h1 className={titleStyle}>HEAD</h1>
        <ul className="md:space-y-3.5 space-y-3">
          <li className={listStyle}>About</li>
          <li className={listStyle}>Careers</li>
          <li className={listStyle}>API Docs</li>
        </ul>
      </div>

      <div>
        <h1 className={titleStyle}>SOLUTIONS</h1>
        <ul className="md:space-y-3.5 space-y-3">
          <li className={listStyle}>Entrepreneur</li>
          <li className={listStyle}>Online marketer</li>
          <li className={listStyle}>Marketing manager</li>
        </ul>
      </div>

      <div>
        <h1 className={titleStyle}>EDITORS</h1>
        <ul className="md:space-y-3.5 space-y-3">
          <li className={listStyle}>Entrepreneur</li>
          <li className={listStyle}>Online marketer</li>
        </ul>
      </div>
    </div>
  )
}
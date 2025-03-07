export function Contact() {
  const titleStyle: string = "pb-[26px] mb-3 font-semibold text-xl"
  const listStyle: string = "text-[18px] text-[#333945] hover:underline cursor-pointer"

  return (
    <div className="h-[248px] grid grid-cols-5">
      <div>
        <h1 className={titleStyle}>INTEGRATIONS</h1>
        <ul className="space-y-3.5">
          <li className={listStyle}>Pricing</li>
          <li className={listStyle}>Integrations</li>
          <li className={listStyle}>Affilliate Programs</li>
          <li className={listStyle}>Agency Partners</li>
        </ul>
      </div>

      <div>
        <h1 className={titleStyle}>MARKETING</h1>
        <ul className="space-y-3.5">
          <li className={listStyle}>Entrepreneur</li>
          <li className={listStyle}>Online marketer</li>
          <li className={listStyle}>Marketing manager</li>
        </ul>
      </div>

      <div>
        <h1 className={titleStyle}>HEAD</h1>
        <ul className="space-y-3.5">
          <li className={listStyle}>About</li>
          <li className={listStyle}>Careers</li>
          <li className={listStyle}>API Docs</li>
        </ul>
      </div>

      <div>
        <h1 className={titleStyle}>SOLUTIONS</h1>
        <ul className="space-y-3.5">
          <li className={listStyle}>Entrepreneur</li>
          <li className={listStyle}>Online marketer</li>
          <li className={listStyle}>Marketing manager</li>
        </ul>
      </div>

      <div>
        <h1 className={titleStyle}>EDITORS</h1>
        <ul className="space-y-3.5">
          <li className={listStyle}>Entrepreneur</li>
          <li className={listStyle}>Online marketer</li>
        </ul>
      </div>
    </div>
  )
}
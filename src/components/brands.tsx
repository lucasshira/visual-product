export function Brands() {
  const imgClasses = "max-w-full max-h-full object-contain px-10.5";

  return (  
    <div className="my-3 h-[121px] flex items-center">
      <div className="flex w-full">
        <div className="flex justify-center items-center h-[121px] border-1 border-l-0 pl-[28px] border-gray-200">
          <img src="/brands/hubspot.png" alt="Hubspot" className={imgClasses} />
        </div>
        <div className="flex justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/intercom.png" alt="Intercom" className={imgClasses} />
        </div>
        <div className="flex justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/google.png" alt="Google" className={imgClasses} />
        </div>
        <div className="flex justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/microsoft.png" alt="Microsoft" className={imgClasses} />
        </div>
        <div className="flex justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/intercom.png" alt="Intercom" className={imgClasses} />
        </div>
        <div className="flex justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/microsoft.png" alt="Microsoft" className={imgClasses} />
        </div>
        <div className="flex justify-center items-center h-[121px] border-1 border-r-0 pr-[28px] border-gray-200">
          <img src="/brands/hubspot.png" alt="Hubspot" className={imgClasses} />
        </div>
      </div>
    </div>
  )
}
import { useRef } from "react";

export function Brands() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgClasses = "max-w-full max-h-full object-contain px-10.5";

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-3 h-[121px] bg-white flex items-center relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 bg-gray-200 text-2xl rounded-full p-2 ml-2 h-[30px] w-8 flex items-center justify-center hover:bg-gray-300 md:hidden"
      >
        &#8249;
      </button>

      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:overflow-x-hidden"
      >
        <div className="flex shrink-0 justify-center items-center h-[121px] border-1 border-l-0 pl-[28px] border-gray-200">
          <img src="/brands/hubspot.png" alt="Hubspot" className={imgClasses} />
        </div>
        <div className="flex shrink-0 justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/intercom.png" alt="Intercom" className={imgClasses} />
        </div>
        <div className="flex shrink-0 justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/google.png" alt="Google" className={imgClasses} />
        </div>
        <div className="flex shrink-0 justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/microsoft.png" alt="Microsoft" className={imgClasses} />
        </div>
        <div className="flex shrink-0 justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/intercom.png" alt="Intercom" className={imgClasses} />
        </div>
        <div className="flex shrink-0 justify-center items-center h-[121px] border-1 border-gray-200">
          <img src="/brands/microsoft.png" alt="Microsoft" className={imgClasses} />
        </div>
        <div className="flex shrink-0 justify-center items-center h-[121px] border-1 border-r-0 pr-[28px] border-gray-200">
          <img src="/brands/hubspot.png" alt="Hubspot" className={imgClasses} />
        </div>
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 bg-gray-200 text-2xl p-2 h-[30px] rounded-full mr-2 w-8 flex items-center justify-center hover:bg-gray-300 md:hidden"
      >
        &#8250;
      </button>
    </div>
  );
}
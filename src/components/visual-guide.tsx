export function VisualGuide() {
  return (
    <div className="mt-3">
      <div className="h-[912px] flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="text-white font-bold text-[42px] leading-[42px] mb-4">
            <h1>Product Management</h1>
            <h1>SaaS: A Visual Guide</h1>
          </div>
          <span className="text-white leading-6">
            In today's digital age, effective product management is crucial for the < br/>
            success of any software-as-a-service (SaaS) company.
          </span>
          <div className="mt-8 flex justify-center gap-7">
            <button 
              className="border-white border-1 text-white font-bold px-9 py-[17px] cursor-pointer 
              hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                Get started
            </button>
            <button className="px-9 py-[17px] bg-white text-gray-900 rounded-[48px] cursor-pointer">Talk to sales</button>
          </div>
          <div className="mt-8">
            <img src="/visual-product-1.png" alt="Visual Guide" />
          </div>
        </div>
      </div>
    </div>
  )
}
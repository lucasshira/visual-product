export function Footer() {
  return (
    <div className="md:flex justify-between">
      <div className="flex gap-5">
        <h1 className="cursor-pointer md:text-[16px] text-[14px] hover:underline">Privacy Policy</h1>
        <h1 className="cursor-pointer md:text-[16px] text-[14px] hover:underline">Security Information</h1>
        <h1 className="cursor-pointer md:text-[16px] text-[14px] hover:underline">Integrations</h1>
      </div>
      <div>
        <h1 className="mt-8 md:mt-0 text-center md:text-[16px] text-[14px]">Copyright © {new Date().getFullYear()} <span className="font-bold cursor-pointer relative hover:underline"><a target="_blank" href="https://lucasshira.vercel.app/">@lucasshira</a></span></h1>
      </div>
    </div>
  )
}
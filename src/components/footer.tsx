export function Footer() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <h1 className="cursor-pointer hover:underline">Privacy Policy</h1>
        <h1 className="cursor-pointer hover:underline">Security Information</h1>
        <h1 className="cursor-pointer hover:underline">Integrations</h1>
      </div>
      <div>
        <h1>Copyright © {new Date().getFullYear()} <span className="font-bold cursor-pointer relative hover:underline"><a target="_blank" href="https://lucasshira.vercel.app/">@lucasshira</a></span></h1>
      </div>
    </div>
  )
}
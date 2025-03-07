import { Contact } from "./contact";
import { Footer } from "./footer";
import { Language } from "./language";

export function EndCap() {
  return (
    <div className="h-auto lg:h-[577px] p-[70px] bg-white">
      <Contact />
      <Language />
      <Footer />
    </div>
  )
}
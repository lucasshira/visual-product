import { Contact } from "./contact";
import { Footer } from "./footer";
import { Language } from "./language";

export function EndCap() {
  return (
    <div className="md:h-[577px] h-[900px] px-[30px] py-[40px] md:p-[70px] bg-white">
      <Contact />
      <Language />
      <Footer />
    </div>
  )
}
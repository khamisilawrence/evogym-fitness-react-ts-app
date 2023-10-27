import { useState } from "react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link.js"
import { SelectedPage } from "@/shared/types.js";
import useMediaQuery from "@/hooks/useMediaQuery.js";
import ActionButton from "@/shared/ActionButton.js";

type NavbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: NavbarProps) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE OF NAVBAR */}
            <img src={Logo} alt="Logo" />
            {/* RIGHT SIDE OF NAVBAR */}
            {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
                />
                <Link 
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
                />
                <Link 
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
                />
                <Link 
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} 
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a Member
                </ActionButton>
              </div>
            </div>
            ) : (
              <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              aria-label="button"
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
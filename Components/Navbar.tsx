import { useEffect } from "react";
import AccountIcons from "./AccountIcons";
import NavbarLinks from './NavbarLinks'
type navbarData = {
  isLogged?: boolean;
  setIsLogged?: any;
  loginPage?: any;
};

let responsiveText =
"max-sm:text-navText-phone max-md:text-navText-sm max-lg:text-navText-md max-xl:text-navText-lg sm:text-navText-phone md:text-navText-sm lg:text-navText-md xl:text-navText-lg";

export default function Navbar({
  isLogged,
  setIsLogged,
  loginPage,
}: navbarData) {
  useEffect(() => {}, [isLogged]);
  return (
    <div
      className={
        "w-full h-[60px] bg-green-600 flex items-center px-7 whitespace-nowrap absolute top-0 left-0 " +
        responsiveText +
        `${loginPage ? " justify-center" : " justify-between"}`
      }
    >
      <img src="./favicon.ico" alt="favc" className="w-10 h-10" />
      <ul className=" w-3/5 h-full flex justify-center items-center gap-3 font-mono px-5 font-semibold text-black select-none">
        {[
          "Anasayfa",
          "Genel İlanlar",
          "Proje Temelli İlanlar",
          "Gönüllülük Esaslı İlanlar",
          "Hakkımızda",
        ].map((item, index) => {
          return <NavbarLinks text={item} key={index} />;
        })}
      </ul>
      {loginPage ? null : (
        <AccountIcons
          loginStatus={isLogged as boolean}
          setIsLogged={setIsLogged}
        />
      )}
    </div>
  );
}

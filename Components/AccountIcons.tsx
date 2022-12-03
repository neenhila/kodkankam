import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

type data = {
  loginStatus: boolean;
  setIsLogged: any;
};

export default function AccountIcons({ loginStatus, setIsLogged }: data) {
  const [dropdownStatus, setDropdownStatus] = useState({ open: false });
  const handleClick = () => {
    if (dropdownStatus.open) return;
    if (loginStatus) {
      setDropdownStatus((state) => {
        return {
          open: !state.open,
        };
      });
    } else {
    }
  };

  const handleClickOutside = (e: any) => {
    let container = document.getElementById("container");

    if (!container) return;

    if (!container.contains(e.target)) {
      setDropdownStatus((state) => {
        return {
          open: !state.open,
        };
      });
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" w-1/12 h-full flex justify-center items-center gap-5 text-center select-none text-md font-semibold">
      <div
        className="flex justify-center items-center flex-col"
        onClick={() => handleClick()}
      >
        <div
          className="flex justify-center items-center flex-col hover:text-red-500 active:text-black"
          onClick={() => {
            if (loginStatus) return;
            window.location.href = "/girisyap"
          }}
        >
          <FaUser /> {loginStatus ? "Hesabım" : "Giriş Yap"}
        </div>
        {dropdownStatus.open ? (
          <div className="absolute top-16 w-32 border-2 h-max">
            <ul id="container">
              <li className="w-full h-10 text-center py-1 hover:text-red-600 hover:bg-green-600">
                Profilim
              </li>
              <li className="w-full h-10 text-center py-1 hover:text-red-600 hover:bg-green-600">
                İlanlarım
              </li>
              <li className="w-full h-10 text-center py-1 hover:text-red-600 hover:bg-green-600">
                Güvenlik
              </li>
              <li className="w-full h-10 text-center py-1 pr-[17px] hover:text-red-600 hover:bg-green-600 group">
                <span className="text-lg text-red-500 group-hover:text-blue-600">
                  +
                </span>{" "}
                Yeni İlan
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div
        className="flex justify-center items-center flex-col hover:text-red-500 active:text-black"
        onClick={() => {
          if (!loginStatus) return;
          setIsLogged(false);
          sessionStorage.removeItem("token");
        }}
      >
        {loginStatus ? <RiLogoutBoxRLine /> : null}
        {loginStatus ? "Çıkış Yap" : null}
      </div>
    </div>
  );
}

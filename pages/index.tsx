import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    sessionStorage.getItem("token") ? setIsLogged(true) : setIsLogged(false);
  }, []);
  return (
    <div>
      <Head>
        <title>KodKankam | Kendine kod arkadaşı bul!</title>
        <meta
          name="description"
          content="Kod arkadaşı bulabileceğin muhteşem bir ortam!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen bg-gray-700 flex justify-center items-center flex-col gap-20">
        <Navbar
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          loginPage={false}
        />
      </div>
    </div>
  );
}

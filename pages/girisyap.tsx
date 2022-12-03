import { useEffect, useState } from "react";
import Login from "../Components/Login";

export default function Girisyap() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token.length > 1) window.location.href = "/";
    if (sessionStorage.getItem("token"))
      setToken(sessionStorage.getItem("token") as string);
  }, [token]);

  if (token && token.length > 1) return (window.location.href = "/");
  return <Login />;
}

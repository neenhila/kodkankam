import axios from "axios";
import Navbar from "./Navbar";
export default function Login({ setToken }: any) {
  return (
    <>
      <Navbar loginPage={true} />
      <div
        className="w-screen h-screen bg-gray-600 absolute z-[-1] pt-16 px-5 flex justify-center items-center gap-5 flex-col"
        id="loginPageContainer"
      >
        <h1 className="text-[46px] font-extrabold font-sans">Giriş Paneli</h1>
        <h4 className="text-center text-md mb-16">
          Kendine bir kodkankası bulabilmek için <br />
          ilk olarak giriş yapman gerekir, bunun için en doğru yerdesin dostum!
        </h4>
        <input
          type="text"
          name="username"
          id="username"
          className="bg-gray-300 border-2 rounded-sm h-8 w-96 outline-none p-5 transition-all duration-[850ms]  focus-within:caret-red-600 focus-within:bg-green-400 focus-within:scale-125"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-300 border-2 rounded-sm h-8 w-96 outline-none p-5 transition-all duration-[850ms]  focus-within:caret-red-600 focus-within:bg-green-400 focus-within:scale-125"
        />
        <input
          type="submit"
          value="Giriş Yap"
          id="submit"
          className="bg-transparent border-2 border-indigo-400 py-2 px-12 rounded-lg transition-all duration-[250ms] hover:bg-indigo-400 hover:text-slate-200 hover:border-indigo-200 active:bg-transparent"
          onClick={() => {
            let usernameInput = document.getElementById(
              "username"
            ) as HTMLInputElement;
            let passwordInput = document.getElementById(
              "password"
            ) as HTMLInputElement;
            if (!usernameInput || !passwordInput) return;
            if (usernameInput.value.length < 3)
              return alert("Kullanıcı adınız 3 karakterden kısa olamaz.");
            if (passwordInput.value.length < 8)
              return alert("Şifreniz 8 karakterden kısa olamaz.");
            axios
              .post("/api/user/giris", {
                username: usernameInput.value as string,
                password: passwordInput.value as string,
              })
              .then((res) => {
                if (res.status == 200) {
                  setToken(res.data);
                  window.location.href = "/?success_login"
                } else {
                  console.log(res)
                }
              });
          }}
        />
      </div>
    </>
  );
}

import { GoogleLogo } from "phosphor-react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth, loginGoogle } from "../../service/firebase";

function LoginPage() {
  const { user, setLogin } = useContext(AuthContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(user);
      }
    });
  }, []);
  const handleClickButtonLogin = async () => {
    const result = await loginGoogle();

    if (result.user) {
      setLogin(result.user);
      console.log(result.user);
    }
  };
  return (
    <form className="flex flex-col items-center">
      <h3 className="text-3xl text-white">
        Faça o registro e boa tentativa {user.name} e {user.mail}
      </h3>
      <p className="text-xl text-white">mas ja aviso que não vai conseguir!</p>
      <div className="h-12 mt-7">
        <div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="google@gmail.com"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="****************"
          />
        </div>

        <button
          onClick={() => handleClickButtonLogin()}
          type="button"
          className="duration-[.3s] text-white flex gap-[5px]
              items-center bg-red-600 p-2 rounded-[10px] hover:mt-[-5px]"
        >
          <GoogleLogo size={32} weight="bold" />
          Login Google
        </button>
      </div>
    </form>
  );
}

export { LoginPage };

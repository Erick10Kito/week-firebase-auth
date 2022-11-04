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
      <h3 className="text-3xl text-white">Faça o registro e boa tentativa</h3>
      <p className="text-xl text-white">mas ja aviso que não vai conseguir!</p>
      <div className=" mt-7">
        <div className="h-12">
          <button
            onClick={() => handleClickButtonLogin()}
            type="button"
            className="duration-[.3s] text-white flex gap-[5px] mt-5
              items-center bg-red-600 p-2 rounded-[10px] hover:translate-y-[-5px]"
          >
            <GoogleLogo size={32} weight="bold" />
            Login Google
          </button>
        </div>
      </div>
    </form>
  );
}

export { LoginPage };

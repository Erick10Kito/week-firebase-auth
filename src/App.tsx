import "../src/index.css";
import { GoogleLogo } from "phosphor-react";
import { auth, loginGoogle, Logout } from "./service/firebase";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  // const Logout = () => {
  //   sessionStorage.clear();
  //   window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  //   return document.location.reload();
  // };
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
    <div className="h-screen flex justify-center items-center">
      <div className="bg-indigo-700 pt-20 pb-20 pl-20 pr-20 rounded-[50px]">
        <div>
          {!user.name ? (
            <form className="flex flex-col items-center">
              <h3 className="text-3xl text-white">
                Faça o registro e boa tentativa {user.name} e {user.mail}
              </h3>
              <p className="text-xl text-white">
                mas ja aviso que não vai conseguir!
              </p>
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
          ) : (
            <form className="flex flex-col items-center">
              <h3 className="text-3xl text-white">
                Seja muito bem-vindo {user.name} e {user.mail}
              </h3>
              <p className="text-xl text-white">
                Já aviso que temos um novo desafio para você!
              </p>
              <p className="text-xl text-white">
                Tu já está logado. QUERO DESLOGAR
              </p>
              <div className="h-12 mt-7">
                <button
                  onClick={() => Logout()}
                  type="button"
                  className="duration-[.3s] text-white flex gap-[5px]
              items-center bg-red-600 p-2 rounded-[10px] hover:mt-[-5px]"
                >
                  DESLOGAR DESSA POHA
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

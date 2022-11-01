import "../src/index.css";
import { GoogleLogo } from "phosphor-react";
import { auth } from "./service/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

interface IUser {
  id: string;
  avatar: string;
  nome: string;
}

function App() {
  const [user, setUser] = useState<IUser>();

  const handleClickButtonLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { uid, displayName, photoURL } = result.user;
      if (!displayName || !photoURL)
        throw new Error("O usuario não tem Nome ou foto");

      setUser({
        id: uid,
        avatar: photoURL,
        nome: displayName,
      });
    }
    console.log(result);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-indigo-700 pt-20 pb-20 pl-20 pr-20 rounded-[50px]">
        <div>
          <form className="flex flex-col items-center">
            <h3 className="text-3xl text-white">
              Faça o registro e boa tentativa
            </h3>
            <p className="text-xl text-white">
              mas ja aviso que não vai conseguir!
            </p>
            <div className="h-12 mt-7">
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
        </div>
      </div>
    </div>
  );
}

export default App;

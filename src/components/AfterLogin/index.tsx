import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Logout } from "../../service/firebase";

function AfterLogin() {
  const { user } = useContext(AuthContext);
  return (
    <form className="flex flex-col items-center">
      <h3 className="text-3xl text-white">
        Seja muito bem-vindo {user.name} e {user.mail}
      </h3>
      <p className="text-xl text-white">
        Já aviso que temos um novo desafio para você!
      </p>
      <p className="text-xl text-white">Tu já está logado. QUERO DESLOGAR</p>
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
  );
}

export { AfterLogin };

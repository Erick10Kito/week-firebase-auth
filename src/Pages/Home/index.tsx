import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AfterLogin } from "../../components/AfterLogin";
import { LoginPage } from "../../components/Login/";

function Home() {
  // const Logout = () => {
  //   sessionStorage.clear();
  //   window.indexedDB.deleteDatabase("firebaseLocalStorageDb");
  //   return document.location.reload();
  // };
  const { user } = useContext(AuthContext);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-indigo-700 pt-20 pb-20 pl-20 pr-20 rounded-[50px]">
        <div>{!user.name ? <LoginPage /> : <AfterLogin />}</div>
      </div>
    </div>
  );
}

export { Home };

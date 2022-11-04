import { createContext, ReactElement, useState } from "react";
import { Logout } from "../service/firebase";

interface IUser {
  id?: string;
  avatar?: string | null;
  name?: string | null;
  mail?: string | null;
  children?: ReactElement;
}

interface IContext {
  user: IUser;
  setLogin: (user: IUnformatedUserData) => void | null;
}

interface IUnformatedUserData {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
}

const formatUserData = ({
  uid,
  displayName,
  photoURL,
  email,
}: IUnformatedUserData): IUser => {
  if (!displayName || !photoURL) {
    throw new Error("O usuario não tem Nome ou foto");
  }
  return {
    id: uid,
    avatar: photoURL,
    name: displayName,
    mail: email,
  };
};

export const AuthContext = createContext<IContext>({} as IContext);

export default function AuthContextProvider(props: IUser) {
  const [user, setUser] = useState<IUser>({
    id: "",
    avatar: "",
    name: "",
    mail: "",
  });

  const setLogin = ({
    uid,
    displayName,
    photoURL,
    email,
  }: IUnformatedUserData) => {
    /* if (email != "erickcamposbem69@gmail.com") {
      alert("Sai daqui Kenga, só tem espaço para o meu nenem");
      return;
    }*/
    const formated = formatUserData({ uid, displayName, photoURL, email });
    setUser(formated);
  };

  return (
    <AuthContext.Provider value={{ user, setLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

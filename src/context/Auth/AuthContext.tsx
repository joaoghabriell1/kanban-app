import createUserOnDataBase from "../../utils/createUserOnDataBase";
import { auth } from "../../firebase/firebase";
import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

interface Props {
  children: ReactNode;
}
interface ServerAuthError {
  code: string;
  message: string;
}

export interface AuthType {
  user: any;
  loadingCurrentUser: boolean;
  createUser: (email: string, password: string, data: any) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  serverErrors: ServerAuthError | null;
  cleanServerErrors: () => void;
}

const AuthContext = createContext<AuthType | null>(null);

export const useAuthContext = (): AuthType => {
  return useContext(AuthContext)!;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>("");
  const [errors, setErrors] = useState<ServerAuthError | null>(null);
  const [loadingCurrentUser, setLoadingCurrentUser] = useState<boolean>(true);

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoadingCurrentUser(false);
    });

    return () => {
      userStatus();
    };
  }, [onAuthStateChanged]);

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error);
      setErrors({
        code: error.code,
        message: error.message,
      });
    });
  };

  const createUser = (email: string, password: string, data: any) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const id = response.user.uid;
        createUserOnDataBase(id, data);
      })

      .catch((error) => {
        console.log(error);
        setErrors({
          code: error.code,
          message: error.message,
        });
      });
  };

  const cleanServerErrors = () => {
    setErrors(null);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loadingCurrentUser,
    logIn,
    logOut,
    createUser: createUser,
    serverErrors: errors,
    cleanServerErrors,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

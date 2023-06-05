export interface LoginResponse {
  logged: boolean;
  pseudo: string;
  token: string;
}
// export interface HeaderProps {
//   isLogged: boolean;
//   setIsLoginModalOpen: (value: boolean) => void;
//   setIsSignup: (value: boolean) => void;
//   setIsLogged: (value: boolean) => void;
// }

export interface LoginModalProps {
  isSignup: boolean;
  setIsSignup: (value: boolean) => void;
  setIsLoginModalOpen: (value: boolean) => void;
  setIsLogged: (valeur: boolean) => void;
  setUserId: (valeur: number) => void;
}

export interface AccountProps {
  userId: number;
  setIsLogged: (value: boolean) => void;
  isLogged: boolean;
}

interface IObjectKeys {
  [key: string]: string | number;
}

export interface Userdataprops extends IObjectKeys {
  id: number;
  name: string;
  city: string;
  email: string;
  password: string;
}

// export interface AccessKeyUserdataprops {
//   keyName: keyof Userdataprops;
// }
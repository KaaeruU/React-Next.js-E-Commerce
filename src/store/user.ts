import { create } from "zustand";

type UserStore = {
  initial: string;
  isLoggedIn: boolean;
  email: string;
  setInitial: (initial: string) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setEmail: (email: string) => void;
  getInitial: () => string;
  getIsLoggedIn: () => boolean;
  getEmail: () => string;
};

export const UseUserStore = create<UserStore>((set, get) => ({
  initial: "",
  isLoggedIn: false,
  email: "",
  setInitial: (initial: string) => {
    set(() => ({ initial }));
  },
  setIsLoggedIn: (isLoggedIn: boolean) => {
    set(() => ({ isLoggedIn }));
  },
  setEmail: (email: string) => {
    set(() => ({ email }));
  },
  getInitial: () => {
    return get().initial;
  },
  getIsLoggedIn: () => {
    return get().isLoggedIn;
  },
  getEmail: () => {
    return get().email;
  },
}));

import { authKey } from "@/constants/authKey";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStore,
} from "../localStores";
import { get } from "http";
import { decodedToken } from "../jwt";
import { user } from "@/type";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  console.log(Object);
  return setToLocalStore(authKey, accessToken);
};

export const getUserInfo = (): user | null => {
  const authToken = getFromLocalStorage(authKey);
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    // console.log(decodedData);
    return { ...decodedData } as user;
  }
  return null;
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

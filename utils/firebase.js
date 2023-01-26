import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const useFBStorage = (firebaseConfig) => {
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  return storage;
};

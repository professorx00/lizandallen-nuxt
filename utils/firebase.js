import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const useFBStorage = () => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.FB_APIKEY,
    authDomain: config.FB_AUTH_DOMAIN,
    projectId: config.FB_PROJECT_ID,
    storageBucket: config.FB_STORAGE_BUCKET,
    messagingSenderId: config.FB_MESSAGE_SENDER,
    appId: config.FB_APP_ID,
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  return storage;
};

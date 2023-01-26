export const useFBConfig = () => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.FB_APIKEY,
    authDomain: config.FB_AUTH_DOMAIN,
    projectId: config.FB_PROJECT_ID,
    storageBucket: config.FB_STORAGE_BUCKET,
    messagingSenderId: config.FB_MESSAGE_SENDER,
    appId: config.FB_APP_ID,
  };
    return useState('fbConfig', () => firebaseConfig)
  }
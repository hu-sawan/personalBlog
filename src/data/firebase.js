import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBSAE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBSAE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBSAE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBSAE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBSAE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBSAE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);

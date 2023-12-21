import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-_mN8JlzeTX-XCVdITdbbvD14Bl4rbcc",
    authDomain: "personalblog-364f2.firebaseapp.com",
    projectId: "personalblog-364f2",
    storageBucket: "personalblog-364f2.appspot.com",
    messagingSenderId: "741208860836",
    appId: "1:741208860836:web:6c9b9a42a2540cc1d71e31",
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbYLr_otRdR43nJfIomG90ocapV2Qwg9Y",
  authDomain: "uped-website.firebaseapp.com",
  projectId: "uped-website",
  storageBucket: "uped-website.firebasestorage.app",
  messagingSenderId: "1028124750234",
  appId: "1:1028124750234:web:a70b5c2ec1ed358c1f8a23",
  measurementId: "G-K1HDCK8NN0"
};

// Safe initialization guard for Next.js hot-reloading
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Safe initialization wrapper for Analytics on server-side environments
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics };
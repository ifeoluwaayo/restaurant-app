import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDuyHga6OgEIUjxFhgWA3G5FwUBWLetGK8",
	authDomain: "restaurant-app-62f1e.firebaseapp.com",
	databaseURL: "https://restaurant-app-62f1e-default-rtdb.firebaseio.com",
	projectId: "restaurant-app-62f1e",
	storageBucket: "restaurant-app-62f1e.appspot.com",
	messagingSenderId: "672194462586",
	appId: "1:672194462586:web:81105149dcf68b1460ccc3",
};

const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

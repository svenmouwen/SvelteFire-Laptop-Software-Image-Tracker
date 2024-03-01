// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAFtbt-Vkf9tDB4dBnXXRrabLZtGtp-Wh8",

    authDomain: "sveltefire-ee21a.firebaseapp.com",

    projectId: "sveltefire-ee21a",

    storageBucket: "sveltefire-ee21a.appspot.com",

    messagingSenderId: "846750234081",

    appId: "1:846750234081:web:c68d5f149b40e7dd4fcea0",

    measurementId: "G-44NN97V5GL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
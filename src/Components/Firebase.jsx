import firebase from "firebase/app";
import "firebase/database";

function Firebase() {

    const firebaseConfig = {
        databaseURL: "https://latviesu-dbfbc-default-rtdb.europe-west1.firebasedatabase.app",
        // другие параметры конфигурации, если они у вас есть
    };

    firebase.initializeApp(firebaseConfig);

    // Проверка подключения
    const db = firebase.database();
    if (db) {
        console.log("Firebase подключена");
    } else {
        console.log("Firebase не подключена");
    }
}

export default Firebase;


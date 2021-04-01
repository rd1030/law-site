var firebaseConfig = {
    apiKey: "AIzaSyCPHpDMhNrTOOcGFRBVlUdgA9cvuSNt6Ak",
    authDomain: "law-site-87a0b.firebaseapp.com",
    databaseURL: "https://law-site-87a0b.firebaseio.com",
    projectId: "law-site-87a0b",
    storageBucket: "law-site-87a0b.appspot.com",
    messagingSenderId: "980595057329",
    appId: "1:980595057329:web:9db5004f9b380c876b7890",
    measurementId: "G-N1MNX5HWYQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref("messages").on("child_removed", function (snapshot) {
    document.getElementById("message-" + snapshot.key).innerHTML = "This message has been deleted";
});

function deleteMessage(self) {
    var messageId = self.getAttribute("data-id");
    firebase.database().ref("messages").child(messageId).remove();
}

function sendMessage() {
    let message;
    let name;
    let phone;
    if (document.getElementsByClassName("name")[0].value && document.getElementsByClassName("name")[0].value && document.getElementsByClassName("phone")[0].value) {
        message = document.getElementsByClassName("message")[0].value;
        name = document.getElementsByClassName("name")[0].value;
        phone = document.getElementsByClassName("phone")[0].value;
    } 
    if (document.getElementsByClassName("name")[1].value && document.getElementsByClassName("name")[1].value && document.getElementsByClassName("phone")[1].value) {
        message = document.getElementsByClassName("message")[1].value;
        name = document.getElementsByClassName("name")[1].value;
        phone = document.getElementsByClassName("phone")[1].value;
    }


    firebase.database().ref("messages").push().set({
        "message": message,
        "sender": myName,
        "name": name,
        "phone": phone
    });
    return false;
}

function sendPrice() {
    let price = document.getElementsByClassName("Price")[0].value;
    console.log(price);
    firebase.database().ref("price").set({
        "price": price
    });
}
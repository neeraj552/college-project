$(document).ready(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyAodQ03hyADCud-M2lMnSDYMHOKVdjbhR0",
        authDomain: "library-mangement-system-ff912.firebaseapp.com",
        databaseURL: "https://library-mangement-system-ff912-default-rtdb.firebaseio.com",
        projectId: "library-mangement-system-ff912",
        storageBucket: "library-mangement-system-ff912.appspot.com",
        messagingSenderId: "851339577267",
        appId: "1:851339577267:web:c020adb61682c4cbe6edc6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var db = firebase.firestore();
    
    $("#book-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit').click(function() {
      add_this();
    });

    firebase.auth().onAuthStateChanged(user => {
        if(!user) {
            window.location = 'index.html';
            }
    });

});

function add_this()
{
    var BookCode = document.getElementById("book_code").value;
    var BookName = document.getElementById("book_name").value;
    var Author1 = document.getElementById("author1").value;
    var Author2 = document.getElementById("author2").value;
    var Subject = document.getElementById("Subject").value;
    var tags = document.getElementById("tags").value;
    var db = firebase.firestore();
 
    db.collection("books").doc(BookCode).set({
        bookcode: BookCode,
        bookname : BookName,
        author1: Author1,
        author2: Author2,
        subject : Subject,
        tags : tags
    })
    .then(function() {
        console.log("Document successfully written!");
        window.alert("Successfully Book Added");
        window.location = 'admin_portal.html';
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

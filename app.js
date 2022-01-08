
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDBsLTdUSlJTA-LJrWzsr23g7Nlm79ZGi0",
    authDomain: "cafenew-ea654.firebaseapp.com",
    projectId: "cafenew-ea654",
    storageBucket: "cafenew-ea654.appspot.com",
    messagingSenderId: "324327088430",
    appId: "1:324327088430:web:40c066f726338817235abf",
    measurementId: "G-VE3FQ3SM9J"
            };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


    var database = firebase.database();

    function sendMessage() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var city = document.getElementById("city").value;
    var subject = document.getElementById("subject").value;

    var newMessagekey = database.ref().child('comments').push().key;
    database.ref('comments/' + newMessagekey + '/First Name').set(fname);
    database.ref('comments/' + newMessagekey + '/Last Name').set(lname);
    database.ref('comments/' + newMessagekey + '/Area').set(city);
    database.ref('comments/' + newMessagekey + '/Message').set(subject);
            }

    document.getElementById('contactForm').addEventListener('submit', submitForm)

    function submitForm(e) {
        e.preventdefault();
            }

    document.querySelector('.alert').getElementsByClassName.display = 'block';

    function hideAlert() {
        document.querySelector('.alert').getElementsByClassName.display = 'none';
            }

    setTimeout(hideAlert, 3000);
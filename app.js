(function() {
    //Initialize Firebase

    const config = {
        apiKey: "AIzaSyBIzEsqTlE5GvUHS1ZBxR8BNDnwGYzfxk4",
        authDomain: "qwkpass.firebaseapp.com",
        databaseURL: "https://qwkpass.firebaseio.com",
        projectId: "qwkpass",
        storageBucket: "qwkpass.appspot.com",
        messagingSenderId: "508115255068"
    };
    firebase.initializeApp(config);

    //Get elements
    const textemail = document.getElementById('textemail');
    const textpassword = document.getElementById('textpassword');
    const btn_login = document.getElementById('btn_login');
    const btn_signup = document.getElementById('btn_signup');
    const btn_logout = document.getElementById('btn_logout');

    //Event Listener

    btn_login.addEventListener('click', e => {
        const email = textemail.value;
        const pass = textpassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);

        promise.catch (e => console.log(e.message));

    });
}());
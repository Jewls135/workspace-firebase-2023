const firebaseConfig = {
  apiKey: "AIzaSyABIokCX0ePHGuPdMPj2iLGiBEvZ2p6Qbk",
  authDomain: "database2023-bc98f.firebaseapp.com",
  projectId: "database2023-bc98f",
  storageBucket: "database2023-bc98f.appspot.com",
  messagingSenderId: "638815971397",
  appId: "1:638815971397:web:6064434e39fd4e527a9b2c",
  measurementId: "G-505DDFMN2R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var email = $('input[name="username"]').val()
  var password = $('input[name="password"]').val();
  var confirmedpassword = $('input[name="cpassword"]').val();

  // check if pass is confirmed or not
  if(password != confirmedpassword){
    // password is wrong so clear form and dont run the rest of the code
    $("signup-form")[0].reset();
    return;
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      
      let user = result.user;
      user.updateProfile({
        displayName: username
      }).then(() => {
        console.log("update profile successfully");
        console.log(user.displayName, "are signed up");

        let date = "Wed, 29 2023 09:28:00 GMT";
        let userinformation = {
          "username": user.displayName,
          "email": email,
          "signupdate":date
        };

        let db = firebase.firestore();
        db.collection("usertable").doc(user.displayName).set(userinformation).then(() => {
          console.log("information saved to firestore");
          window.location.href = "Login.html";
        });
      });
      // ...
      console.log(username, "are signed up");
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});

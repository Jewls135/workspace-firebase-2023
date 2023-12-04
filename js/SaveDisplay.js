// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// global variable
var currentuser = "";
var currentemail = "";

// check if user is logged in

firebase.auth().onAuthStateChanged(user => {
  if (user){
    currentuser = user.displayName;
    currentemail = user.email;
    console.log(currentuser, "is signed in with", currentemail);
  } else {
    console.log("User is logged out");
    window.location.href="Login.html";
  }
});

// sign out code
$('#signout').click(function(){
  firebase.auth().signOut().then(()=>{
    console.log("User sign out");
    window.location.href = "index.html";
  }).catch(() => {

  });
});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table

var firebaseConfig = {
    apiKey: "AIzaSyD2IfXoIPQwVSvhzurWCPochFRzBqbxUFg",
  authDomain: "shoogaree-3e072.firebaseapp.com",
  databaseURL: "https://shoogaree-3e072-default-rtdb.firebaseio.com",
  projectId: "shoogaree-3e072",
  storageBucket: "shoogaree-3e072.appspot.com",
  messagingSenderId: "898609609770",
  appId: "1:898609609770:web:428d23f62c80ce9601d753"
  };
      
      // Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
console.log(app.database);

function thanks(){
    var Ordered = document.getElementById("Section5")
    Ordered.innerHTML=`<div class="container text-center">
    <h1 style="color:#FA8DA2; font-family: 'Assistant', sans-serif;
              font-family: 'Borel', cursive;
              font-family: 'Noto Nastaliq Urdu', serif;
              font-family: 'Poiret One', cursive;
              font-family: 'Roboto Slab', serif; font-size: 80px;"> <br>
                  Thanks For Ordering</h1> 
                  <p>Shoogaree Team Will Contact You Soon!!</p>
  
  </div>
  `
}




function order(){
    var name = document.getElementById("name")
var email = document.getElementById("email")
var contactNO = document.getElementById("contactNO")
var altNo = document.getElementById("altNo")
var fp = document.getElementById("f/p")
var mod = document.getElementById("mod")
var details = document.getElementById("details")
var dod = document.getElementById("dod")
var address = document.getElementById("addressD")

    var obj ={
        name: name.value,
        email: email.value,
        contactNO : contactNO.value,
        altNo: altNo.value,
        flavours: fp.value,
        mod :mod.value,
        details: details.value,
        dod :dod.value,
        address: address.value,
  



    }
   
    firebase
    .database()
    .ref("userDetails")
    .push(obj);
    
console.log(obj)
thanks()

}
function getval(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var contactNO = document.getElementById("contactNO")
    var altNo = document.getElementById("altNo")
    var fp = document.getElementById("f/p")
    var mod = document.getElementById("mod")
    var details = document.getElementById("details")
    var dod = document.getElementById("dod")
    var address = document.getElementById("addressD")



  if (name.value==null || name.value=="") {
    alert("first fill the entire field..");}
    else if (contactNO.value==null || contactNO.value=="") {
        alert("first fill the entire field..");}
        else if (mod.value==null || mod.value=="") {
            alert("first fill the entire field..");}
            else if (dod.value==null || dod.value=="") {
                alert("first fill the entire field..");} 
                else if (address.value==null || address.value=="") {
                    alert("first fill the entire field..");} 

    else {
        order()
    }
  
}

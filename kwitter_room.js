
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDWzpJdP9GC-Znywf80Hn2BGG3YTIV-WCI",
      authDomain: "social-website-5d2e8.firebaseapp.com",
      databaseURL: "https://social-website-5d2e8-default-rtdb.firebaseio.com",
      projectId: "social-website-5d2e8",
      storageBucket: "social-website-5d2e8.appspot.com",
      messagingSenderId: "613807522633",
      appId: "1:613807522633:web:4d9c8d3a1f24f0b00ed098"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
      user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) { 
       childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    
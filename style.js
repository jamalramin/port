function send() {
  alert("your message sent successfully");
}

function validatoin() {
  var name = document.getElementById("name").value;
  if (name.length < 3) {
    alert("your name is short !");
    return false;
  } else if (name == " ") {
    alert("your name cant be vacant !");
  } else if (name.length > 8) {
    alert("your name is too long!");
  } else {
    return true;
  }
}

function increase() {
  var nav = document.querySelector("nav");
  nav.style.width = "100%";
  nav.style.transitionDuration = "0.5s";
}

function dec() {
  var nav = document.querySelector("nav");
  nav.style.width = "0%";
  nav.style.transitionDuration = "0.5s";
}

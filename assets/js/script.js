// (A) SMOOTH SCROLL TO TOP
function totop () {
    window.scroll({
      top: 0, left: 0, behavior: "smooth"
    });
  }
  
  // (B) SHOW/HIDE BUTTON
  function togtop () {
    if (window.scrollY >= 100) {
      document.getElementById("backtop").classList.add("show");
    } else {
      document.getElementById("backtop").classList.remove("show");
    }
  }
  window.addEventListener("scroll", togtop);
  window.addEventListener("resize", togtop);
// Client-side validation for the contact form
function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }  
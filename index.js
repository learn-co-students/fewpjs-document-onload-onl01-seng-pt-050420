document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let msg = document.getElementById('text')
    console.log(msg)
    msg.textContent = "This is really cool!"
  });
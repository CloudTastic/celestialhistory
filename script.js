function protect0() {
               const result = document.getElementById("tutorial").value;
               let passcode = "Tsuki";
               let space = '';
               if (result == space) {
                  alert("Type passcode")
               } else {
                  if (result == passcode) {
                    window.location.href = "pass.html";
                  } else {
                     alert("Oops! You're wrong! Try again!");
                  }
               }
            }

function protect1() {
               const result = document.getElementById("tutorial").value;
               let passcode = "Yamada";
               let passcode = "Ikeda";
               let space = '';
               if (result == space) {
                  alert("Type passcode")
               } else {
                  if (result == passcode) {
                    window.location.href = "pass.html";
                  } else {
                     alert("Oops! You're wrong! Try again!");
                  }
               }
            }














function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

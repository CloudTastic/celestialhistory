function protectqone() {
    const result = document.getElementById("tutorial").value;
    let passcode = "Tsuki";
    let space = '';
    
    if (result.trim() === space) {
        alert("Type passcode");
    } else {
        if (result === passcode) {
            // Check if this log is appearing in the console
            console.log("Correct passcode entered");
            window.location.href = "pass.html";
        } else {
            alert("Oops! You're wrong! Try again!");
        }
    }
}

function protectqtwo() {
    const result = document.getElementById("tutorial").value;
    let passcode = "Yamada";
    let space = '';
    
    if (result.trim() === space) {
        alert("Type passcode");
    } else {
        if (result === passcode) {
            // Check if this log is appearing in the console
            console.log("Correct passcode entered");
            window.location.href = "cc.html";
        } else {
            alert("Oops! You're wrong! Try again!");
        }
    }
}

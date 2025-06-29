var heading_content = document.getElementById("heading").innerHTML;
document.writeln(heading_content + "<br>")

function validateForm(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message;

    if (email == "") {
        message = "Email is required.";
        document.getElementById("signup_message").style.color = "red";
    }

    else if (password == "") {
        message = "Password is required.";
        document.getElementById("signup_message").style.color = "red";
    }

    else {
        message = "Form is submitted.";
        document.getElementById("signup_message").style.color = "green";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

    document.getElementById("signup_message").innerText = message;
}


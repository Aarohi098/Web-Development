function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const validationMessage = document.getElementById("validation_message");
    let message = "";

    if (name === "") {
        message = "Name is required";
        validationMessage.style.color = "red";
    }
    else if (age === "") {
        message = "Age is required";
        validationMessage.style.color = "red";
    }
    else if (Number(age) < 18) {
        message = "You must be at least 18 years old";
        validationMessage.style.color = "red";
    }
    else {
        message = "Form submitted successfully";
        validationMessage.style.color = "green";

        // Clear inputs
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
    }

    validationMessage.innerText = message;
}

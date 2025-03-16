// Function: generateInvitation
// Purpose: Collects form input and updates the invitation placeholders dynamically
function generateInvitation() {
    // Declare variables to store the values from the input fields
    var recipientName;
    var hostName;

    // Retrieve the input values using getElementById
    recipientName = document.getElementById("recipientNameInput").value;
    hostName = document.getElementById("hostNameInput").value;

    // Update the content of the span elements with the user input
    document.getElementById("recipientNamePlaceholder").innerHTML = recipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = hostName;

    // Prevent the form from submitting to avoid page reload
    return false;
}

document
  .getElementById("waitlist-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const wallet = document.getElementById("wallet").value;
    const email = document.getElementById("email").value;
    const discord = document.getElementById("discord").value;

    // Here you can add your logic to handle the form submission, e.g., sending data to your server
    console.log("Wallet:", wallet);
    console.log("Email:", email);
    console.log("Discord:", discord);

    // Show notification
    const notification = document.getElementById("notification");
    notification.style.display = "block";

    // Disable the form inputs and button
    document.getElementById("wallet").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("discord").disabled = true;
    document.getElementById("submit-button").disabled = true;

    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  });

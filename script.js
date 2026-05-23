const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const bookingMessage =
document.getElementById("booking-message");

const buttons =
document.querySelectorAll(".event-card button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        popup.style.display = "flex";
    });
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

document.getElementById("confirm-booking")
.addEventListener("click", function () {

    const name =
    document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    bookingMessage.textContent =
    `✅ Booking confirmed for ${name}!`;

    popup.style.display = "none";
});
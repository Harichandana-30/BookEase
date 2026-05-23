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

// Load saved booking
const savedBooking =
localStorage.getItem("booking");

if (savedBooking) {
    bookingMessage.textContent =
    savedBooking;
}

document.getElementById("confirm-booking")
.addEventListener("click", function () {

    const name =
    document.getElementById("name").value;

    const tickets =
    document.getElementById("tickets").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    const message =
    `✅ Booking confirmed for ${name} (${tickets} ticket(s))`;

    bookingMessage.textContent =
    message;

    // Save booking
    localStorage.setItem(
        "booking",
        message
    );

    popup.style.display = "none";
});
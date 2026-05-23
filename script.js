const bookingMessage = document.getElementById("booking-message");

document.getElementById("concert-btn")
.addEventListener("click", function () {
    bookingMessage.textContent =
    "🎵 Music Concert booked successfully!";
});

document.getElementById("tech-btn")
.addEventListener("click", function () {
    bookingMessage.textContent =
    "💻 Tech Conference booked successfully!";
});

document.getElementById("food-btn")
.addEventListener("click", function () {
    bookingMessage.textContent =
    "🍔 Food Festival booked successfully!";
});
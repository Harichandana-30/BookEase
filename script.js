const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const bookingMessage =
document.getElementById("booking-message");

const bookingList =
document.getElementById("booking-list");

const buttons =
document.querySelectorAll(".event-card button");

let selectedEvent = "";

// Open popup
buttons.forEach(button => {
    button.addEventListener("click", function () {

        selectedEvent =
        button.parentElement.querySelector("h3")
        .textContent;

        popup.style.display = "flex";
    });
});

// Close popup
closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

// Load saved bookings
const savedBookings =
JSON.parse(localStorage.getItem("bookings")) || [];

savedBookings.forEach(booking => {
    addBookingToUI(booking);
});

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

    const bookingText =
    `✅ ${name} - ${selectedEvent} (${tickets} ticket(s))`;

    bookingMessage.textContent =
    `Booking confirmed for ${name}!`;

    addBookingToUI(bookingText);

    savedBookings.push(bookingText);

    localStorage.setItem(
        "bookings",
        JSON.stringify(savedBookings)
    );

    popup.style.display = "none";
});

// Add booking to page
function addBookingToUI(text) {

    const li =
    document.createElement("li");

    li.textContent = text;

    bookingList.appendChild(li);
}

const darkModeBtn =
document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle(
        "dark-mode"
    );
});

const searchInput =
document.getElementById("search-input");

searchInput.addEventListener("keyup", function () {

    const searchValue =
    searchInput.value.toLowerCase();

    const eventCards =
    document.querySelectorAll(".event-card");

    eventCards.forEach(card => {

        const eventName =
        card.querySelector("h3")
        .textContent.toLowerCase();

        if (eventName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
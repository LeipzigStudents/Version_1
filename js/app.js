async function loadEvents() {
    try {
        const response = await fetch("data/events.json");
        const events = await response.json();

        const container = document.getElementById("events-container");

        events.forEach(event => {
            const card = document.createElement("div");

            card.classList.add("event-card");

            card.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>

                <a href="event.html?id=${event.id}">
                    View Details
                </a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}

loadEvents();
function getEventId() {
    const params = new URLSearchParams(window.location.search);

    return params.get("id");
}

async function loadEvent() {

    const eventId = getEventId();

    const response = await fetch("data/events.json");

    const events = await response.json();

    const event = events.find(
        e => e.id.toString() === eventId
    );

    const container = document.getElementById("event-details");

    if (!event) {

        container.innerHTML = `
            <h2>Event not found</h2>
        `;

        return;
    }

    container.innerHTML = `
        <div class="event-card">

            <h2>${event.title}</h2>

            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>

            ${event.organizer ? `<p><strong>Organizer:</strong> ${event.organizer}</p>` : ""}
            ${event.price ? `<p><strong>Price:</strong> ${event.price}</p>` : ""}
            ${event.address ? `<p><strong>Address:</strong> ${event.address}</p>` : ""}

            <br>

            <p>${event.description}</p>

            ${event.website ? `
                <p>
                    <a href="${event.website}" target="_blank">
                        Visit Event Website
                    </a>
                </p>
            ` : ""}

        </div>
    `;
}

loadEvent();
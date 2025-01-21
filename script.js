// script.js
let ticket = [];
let totalPrice = 0;

function addToTicket(service, price) {
    ticket.push({ service, price });
    updateTicket();
}

function updateTicket() {
    const ticketList = document.getElementById('ticket-list');
    const totalPriceElement = document.getElementById('total-price');
    ticketList.innerHTML = '';
    totalPrice = 0;

    ticket.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.service} - $${item.price}`;
        ticketList.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice;
}

function scheduleService() {
    if (ticket.length === 0) {
        alert('Please add services to your ticket before scheduling.');
        return;
    }
    // Here you would typically send the ticket data to a server or open a modal for scheduling
    alert('Service scheduled!'); // Placeholder for actual scheduling logic
    ticket = [];
    updateTicket();
}
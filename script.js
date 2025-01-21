// script.js
let ticket = [];
let subTotalPrice = 0;
let taxRate = .087;
let taxPrice = 0;
let totalPrice = 0;

function addToTicket(service, price) {
    ticket.push({ service, price });
    updateTicket();
}

function updateTicket() {
    const ticketList = document.getElementById('ticket-list');
    const subTotalPriceElement = document.getElementById('sub-total-price');
    const taxPriceElement = document.getElementById('tax-price');
    const totalPriceElement = document.getElementById('total-price');
    ticketList.innerHTML = '';
    subTotalPrice = 0;

    ticket.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.service} - $${item.price}`;
        ticketList.appendChild(li);
        subTotalPrice += item.price;
        taxPrice = subTotalPrice * taxRate;
        totalPrice = taxPrice + subTotalPrice;
    });

    subTotalPriceElement.textContent = subTotalPrice;
    taxPriceElement.textContent = taxPrice.toFixed(2);
    totalPriceElement.textContent = totalPrice.toFixed(2);

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
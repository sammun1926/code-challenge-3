//

document.addEventListener("DOMContentLoaded", function() {
    fetchMovieDetails();
  });
  
  function fetchMovieDetails() {
    fetch('http://localhost:3000/films/1')
      .then(response => response.json())
      .then(movie => displayMovieDetails(movie));
  }
  
  function displayMovieDetails(movie) {
    const availableTickets = movie.capacity - movie.tickets_sold;
  
    const movieDetailsContainer = document.getElementById("movie-details");
  
    const poster = document.createElement("img");
    poster.src = movie.poster;
  
    const title = document.createElement("p");
    title.textContent = `Title: ${movie.title}`;
  
    const runtime = document.createElement("p");
    runtime.textContent = `Runtime: ${movie.runtime} minutes`;
  
    const showtime = document.createElement("p");
    showtime.textContent = `Showtime: ${movie.showtime}`;
  
    const availableTicketsElement = document.createElement("p");
    availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;
  
    const movieDetailsItemContainer = document.createElement("div");
    movieDetailsItemContainer.classList.add("movie-details-item");
    movieDetailsItemContainer.appendChild(poster);
    movieDetailsItemContainer.appendChild(title);
    movieDetailsItemContainer.appendChild(runtime);
    movieDetailsItemContainer.appendChild(showtime);
    movieDetailsItemContainer.appendChild(availableTicketsElement);
  
    movieDetailsContainer.appendChild(movieDetailsItemContainer);
  }

  //PART TWO

  const filmsList = document.querySelector('#films');
// Fetch movie data from the endpoint
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    // Remove the placeholder li element
    const placeholder = document.querySelector('#films li');
    // Create a list item for each movie
    data.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      li.classList.add('film', 'item');
      filmsList.appendChild(li);
    });
  })


  //PART THREE!

  const buyTicketBtn = document.getElementById("buy-ticket-btn");
const ticketAvailability = document.getElementById("ticket-availability");

let availableTickets = 10; // Change this value to set the initial number of available tickets

buyTicketBtn.addEventListener("click", function() {
  if (availableTickets > 0) {
    availableTickets--;
    ticketAvailability.textContent = `Available Tickets: ${availableTickets}`;
  } else {
    alert("Sorry, this showing is sold out!");
  }
});
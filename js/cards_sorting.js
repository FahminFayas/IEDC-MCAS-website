// Sorting Cards Function

  window.addEventListener('load', function() {
    sortCards();
  });
  
  function sortCards() {
    var cardsContainer = document.getElementById('point-content');
    var cards = Array.from(cardsContainer.getElementsByClassName('point-card'));
  
    // Sort the cards based on the data-points attribute
    cards.sort(function(a, b) {
      var pointsA = parseInt(a.querySelector('h2').getAttribute('data-points'));
      var pointsB = parseInt(b.querySelector('h2').getAttribute('data-points'));
      return pointsB - pointsA;
    });
  
    // Append the sorted cards to the container
    cards.forEach(function(card) {
      cardsContainer.appendChild(card);
    });
  }
  
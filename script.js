const btn = document.getElementsByClassName("btn")[0]; // Assuming you want the first element with the class "btn"

btn.onclick = function() {
  const contentElements = document.getElementsByClassName("content");

  // Loop through each element with the class "content" and set its display style to "block"
  for (let i = 0; i < contentElements.length; i++) {
    contentElements[i].style.display = "block";
  }
};
function moveButton() {
    // Get the button element
    var button = document.querySelector('.nobtn');
  
    // Get the width and height of the viewport
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;
  
    // Calculate a random position for the button
    var randomX = Math.floor(Math.random() * (viewportWidth - button.offsetWidth));
    var randomY = Math.floor(Math.random() * (viewportHeight - button.offsetHeight));
  
    // Set the new position for the button
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
  }

  
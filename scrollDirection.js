/**************************************

      SCROLL DIRECTION DETECTION:
  IS THE USER SCROLLING UP OR DOWN?

**************************************/

// Capture initial scroll state
let scrollPos = 0;

// Add scroll event
window.addEventListener('scroll', function() {
    // Detect current scroll state and compare it with previous 
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        // THE ACTION YOU NEED TO APPLY WHEN USER SCROLLS UP ⬆️
    } else {
        // THE ACTION YOU NEED TO APPLY WHEN USER SCROLLS DOWN ⬇️
    }
    // Save new scroll position / state
    scrollPos = (document.body.getBoundingClientRect()).top;
});
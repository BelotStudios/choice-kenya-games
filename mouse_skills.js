// Button changes position every ___ seconds
// If user clicks on the button three times, popup says "You win"
// Else if user clicks on the button less than three times in 30 seconds, popup says "Try again"

function moveButton() {
    // Get window dimensions
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    // Generate random positions
    var randomX = Math.random() * (screenWidth - 100); // subtracting button width
    var randomY = Math.random() * (screenHeight - 40); // subtracting button height

    // Apply new positions
    var button = document.getElementById('moveButton');
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
var count = 0;
var output = document.getElementById('output');
function score() {
    count = count + 10;
    output.innerHTML = count;
    /*
    Next Level iteration
    if (count === 150) {
        var completion = document.getElementById('completion');
        completion.innerHTML = '<h1 style="margin-top: 10px; border-radius: 20px; text-align: center; color: rgb(235, 235, 235); background-color: rgb(232, 194, 42);width: 50%;height: 20vh;margin-left: auto;margin-right: auto;" id="completion">Level Finished! Play More?</h1>   <a href="right-click-lesson.html" id="nextLevel">Next Level</a>';
    }
    else if (count > 150) {
        var completion = document.getElementById('completion');
        completion.innerHTML = '<a href="right-click-lesson.html" id="nextLevel">Next Level</a>';
    }*/
    /*
    if (count >= 20) {
        
    }*/
}
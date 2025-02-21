const texts = [
    "",
    "Site is under construction, come back again.<br>Turn off the light before you leave.", 
    "",
    "Oh, you turned it back on?<br>Told you, there’s nothing here...yet.", 
    "",
    "Still hoping for a surprise?<br>Sorry, we’ll let you know when it’s ready.", 
    "",
    "Alright, I get it—you like pressing buttons.<br>But this isn’t changing anything.", 
    "",
    "Fine, keep doing this if it makes you happy.<br>But the conversation is just going to repeat now."
];

// Force reset index to 0 when reloading
sessionStorage.setItem("screenIndex", 0);
let screenIndex = 0;

// Preload audio for instant playback
const clickSound = new Audio("click.ogg");
clickSound.preload = "auto";
clickSound.volume = 1.0;

// Function to update the screen dynamically
function updateScreen() {
    const isDarkScreen = screenIndex % 2 === 0;
    
    document.body.style.background = isDarkScreen ? "black" : "white";
    document.body.style.color = isDarkScreen ? "white" : "black";
    document.getElementById("textDisplay").innerHTML = texts[screenIndex];

    document.getElementById("logoImage").style.display = isDarkScreen ? "none" : "block";
    document.getElementById("clickImage").src = isDarkScreen ? "image 1.png" : "image 2.png";
}

// Load initial state
updateScreen();

// Click event to toggle changes dynamically
document.getElementById("clickImage").addEventListener("click", function(event) {
    event.preventDefault();

    clickSound.currentTime = 0;  // Restart sound instantly
    clickSound.play().catch(error => console.log("Audio play error:", error));

    screenIndex = (screenIndex + 1) % texts.length;
    updateScreen();
});

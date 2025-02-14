let totalMinutes = 0;
let totalSeconds = 0;

function addTrack() {
    let minInput = document.getElementById("minutes").value;
    let secInput = document.getElementById("seconds").value;

    let minutes = parseInt(minInput) || 0;
    let seconds = parseInt(secInput) || 0;

    if (minutes === 0 && seconds === 0) {
        alert("Enter valid track duration!");
        return;
    }

    // Convert seconds to minutes if needed
    totalMinutes += minutes;
    totalSeconds += seconds;

    if (totalSeconds >= 60) {
        totalMinutes += Math.floor(totalSeconds / 60);
        totalSeconds = totalSeconds % 60;
    }

    // Update track list
    let trackList = document.getElementById("track-list");
    let listItem = document.createElement("li");
    listItem.textContent = `${minutes}m ${seconds}s`;
    trackList.appendChild(listItem);

    // Update total playtime
    document.getElementById("total-time").textContent = 
        `${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`;

    // Clear inputs
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
}

function resetCalculator() {
    totalMinutes = 0;
    totalSeconds = 0;
    document.getElementById("track-list").innerHTML = "";
    document.getElementById("total-time").textContent = "00:00";
}
function loadSavedWorkout() {
    const savedWorkout = localStorage.getItem("customWorkout");
    if (savedWorkout) {
        const customWorkout = JSON.parse(savedWorkout);
        const customList = document.getElementById('custom-list');
        customList.innerHTML = "";
        customWorkout.forEach(exercise => {
            const listItem = document.createElement("li");
            listItem.textContent = exercise;
            customList.appendChild(listItem);
        });
    }
}

function clearSavedWorkout() {
    localStorage.removeItem("customWorkout");
    document.getElementById('custom-list').innerHTML = "";
    alert("Workout cleared!");
}

window.onload = loadSavedWorkout;
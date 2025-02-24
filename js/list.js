function findExerciseByName(name) {
    for (const category in exercisesData) {
      const exercise = exercisesData[category].find(ex => ex.name === name);
      if (exercise) return exercise;
    }
    return null;
  }
  
  function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  }
  
  function loadSavedWorkout() {
    const savedWorkout = localStorage.getItem("customWorkout");
  
    const customList = document.getElementById('custom-list');
    const totalExercisesSpan = document.getElementById('total-exercises');
    const caloriesBurnedSpan = document.getElementById('calories-burned');
    const workoutTimeSpan = document.getElementById('workout-time');
  
    customList.innerHTML = "";
    totalExercisesSpan.textContent = "0";
    caloriesBurnedSpan.textContent = "0 cal";
    workoutTimeSpan.textContent = "00:00:00";
  
    if (savedWorkout) {
      const customWorkout = JSON.parse(savedWorkout);
  
      let totalCalories = 0;
      let totalTime = 0;
  
      customWorkout.forEach(exerciseName => {
        const exercise = findExerciseByName(exerciseName);
  
        if (exercise) {
          const listItem = document.createElement("li");
          listItem.textContent = exercise.name;
          customList.appendChild(listItem);
  
          totalCalories += exercise.calories;
          totalTime += exercise.time;
        }
      });
  
      totalExercisesSpan.textContent = customWorkout.length;
      caloriesBurnedSpan.textContent = `${totalCalories} cal`;
      workoutTimeSpan.textContent = formatTime(totalTime);
    }
  }
  
  function clearSavedWorkout() {
    localStorage.removeItem("customWorkout");
    document.getElementById('custom-list').innerHTML = "";
    document.getElementById('total-exercises').textContent = "0";
    document.getElementById('calories-burned').textContent = "0 cal";
    document.getElementById('workout-time').textContent = "00:00:00";
    alert("Workout cleared!");
  }
  
  window.onload = loadSavedWorkout;
  
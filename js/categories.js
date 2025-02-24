
  let customWorkout = JSON.parse(localStorage.getItem('customWorkout')) || [];
  
  function showExercises(category) {
    const exercisesContainer = document.getElementById('exercises');
    exercisesContainer.innerHTML = '';
  
    if (exercisesData[category]) {
      const exercises = exercisesData[category];
      let exerciseList = "<ul>";
      exercises.forEach(exercise => {
        exerciseList += `
          <li>
            <h3>${exercise.name}</h3>
            <p>${exercise.description}</p>
            ${exercise.image ? `<img src="${exercise.image}" alt="${exercise.name}" />` : ''}
            <button onclick="addExerciseToCustom('${exercise.name}')">Add to Custom Plan</button>
          </li>
        `;
      });
      exerciseList += "</ul>";
      exercisesContainer.innerHTML = exerciseList;
    } else {
      exercisesContainer.innerHTML = "<p>No exercises available for this category.</p>";
    }
  
    document.getElementById('exercise-list').style.display = 'block';
  }
  
  function addExerciseToCustom(exerciseName) {
    customWorkout.push(exerciseName);
    localStorage.setItem('customWorkout', JSON.stringify(customWorkout));
    updateCustomWorkout();
  }
  
  function updateCustomWorkout() {
    const customList = document.getElementById('custom-list');
    if (customList) {
      customList.innerHTML = "";
      customWorkout.forEach(exercise => {
        const listItem = document.createElement("li");
        listItem.textContent = exercise;
        customList.appendChild(listItem);
      });
      document.getElementById('custom-workout').style.display = 'block';
    }
  }
  
  function addCustomWorkout() {
    const exerciseName = prompt("Enter the name of your custom workout:");
    if (exerciseName) {
      customWorkout.push(exerciseName);
      localStorage.setItem('customWorkout', JSON.stringify(customWorkout));
      updateCustomWorkout();
    }
  }
 
  
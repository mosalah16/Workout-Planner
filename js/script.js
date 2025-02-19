function sidebar_open() {
  document.getElementById("sidebar").classList.add("show");
  document.body.classList.add("sidebar-open");
}

function sidebar_close() {
  document.getElementById("sidebar").classList.remove("show");
  document.body.classList.remove("sidebar-open");
}

let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);

const exercisesData = {
    strength: [
      { name: "Push-Up", description: "Great for upper body strength", image: "images/push-up.jpg" },
      { name: "Squat", description: "Targets the legs and core", image: "images/squat.jpg" }
    ],
    cardio: [
      { name: "Running", description: "Boosts cardiovascular health", image: "images/running.jpg" },
      { name: "Jump Rope", description: "Great for cardio and coordination", image: "images/jump-rope.jpg" },
      { name: "High Knee Running", description: "Low abs machine", image: "images/high-knee-running.jpg" },
      { name: "Burpees", description: "Not for the faint of heart", image: "images/burpees.webp" }
    ],
    flexibility: [
      { name: "Yoga", description: "Increases flexibility and relaxation", image: "images/yoga.jpg" },
      { name: "Stretching", description: "Improves flexibility and muscle health", image: "images/stretching.jpg" },
      { name: "Lunges with Twist", description: "Improves muscle and spinal health", image: "images/lunge.jpg" }
    ]
  };
  
  let customWorkout = [];
  
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
    updateCustomWorkout();
  }
  
  function updateCustomWorkout() {
    const customList = document.getElementById('custom-list');
    customList.innerHTML = "";
    customWorkout.forEach(exercise => {
      const listItem = document.createElement("li");
      listItem.textContent = exercise;
      customList.appendChild(listItem);
    });
    document.getElementById('custom-workout').style.display = 'block';
  }
  
  function addCustomWorkout() {
    const exerciseName = prompt("Enter the name of your custom workout:");
    if (exerciseName) {
      customWorkout.push(exerciseName);
      updateCustomWorkout();
    }
  }
  
  function saveWorkout() {
    localStorage.setItem("savedWorkout", JSON.stringify(customWorkout));
    alert("Workout saved!");
  }
  
  function loadSavedWorkout() {
    const savedWorkout = localStorage.getItem("savedWorkout");
    if (savedWorkout) {
      customWorkout = JSON.parse(savedWorkout);
      updateCustomWorkout();
    }
  }
  
  function clearSavedWorkout() {
    localStorage.removeItem("savedWorkout");
    customWorkout = [];
    updateCustomWorkout();
    alert("Saved workout cleared!");
  }
  
  window.onload = loadSavedWorkout;
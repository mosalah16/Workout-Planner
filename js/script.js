function sidebar_open() {
  document.getElementById("sidebar").classList.add("show");
  document.body.classList.add("sidebar-open");
}

function sidebar_close() {
  document.getElementById("sidebar").classList.remove("show");
  document.body.classList.remove("sidebar-open");
}

document.addEventListener("click", function(e) {
  if (!document.getElementById("sidebar").contains(e.target) && e.target !== document.getElementById("sidebar_open") && document.getElementById("sidebar").classList.contains("show")) {
    sidebar_close();
  }
});

const iframe = document.getElementById("mainframe")
if (iframe) {
  iframe.addEventListener("load", function() {
    iframe.contentWindow.addEventListener("focus", function() {
      if (document.getElementById("sidebar").classList.contains("show")) {
        sidebar_close();
      }
    });
  });
}

window.addEventListener("blur", function() {
  if (document.getElementById("sidebar").classList.contains("show")) {
    sidebar_close();
  }
});

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

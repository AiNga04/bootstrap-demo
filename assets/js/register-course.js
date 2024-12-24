// register-course
const steps = document.querySelectorAll(".step");
const progressBarFill = document.getElementById("progress-bar-fill");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentStep = 1;

function updateSteps() {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  progressBarFill.style.width =
    ((currentStep - 1) / (steps.length - 1)) * 100 + "%";

  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === steps.length;
}

nextButton.addEventListener("click", () => {
  if (currentStep < steps.length) {
    currentStep++;
    updateSteps();
  }
});

prevButton.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    updateSteps();
  }
});

updateSteps();
// register-course end

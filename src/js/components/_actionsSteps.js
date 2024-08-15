const actionsSteps = () => {
  const steps = document.querySelectorAll(".steps__item");
  const sendButtons = document.querySelectorAll(".steps__btn");

  let currentStep = 0;

  sendButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      if (button.type === "submit") {
        event.preventDefault();
        const form = steps[index].querySelector(".steps__form");
        const inputs = form.querySelectorAll(
          'input[type="radio"], input[type="checkbox"], input, select, textarea'
        );

        let allInputsFilled = true;
        inputs.forEach((input) => {
          if (input.type === "radio") {
            if (!form.querySelector(`input[name="${input.name}"]:checked`)) {
              allInputsFilled = false;

              const formActionsItem = input.closest('.form-actions__item'); 
              formActionsItem.classList.add("error");
            } else {
              const formActionsItem = input.closest('.form-actions__item'); 
              formActionsItem.classList.remove("error");
            }
          } else if (input.type === "checkbox") {
            if (!form.querySelector(`input[name="${input.name}"]:checked`)) {
              allInputsFilled = false;
              const formActionsItem = input.closest('.form-actions__item'); 
              formActionsItem.classList.add("error");
            } else {
              const formActionsItem = input.closest('.form-actions__item'); 
            }
          } else if (input.value.trim() === "") {
            allInputsFilled = false;
            const formActionsItem = input.closest('.form-actions__item'); 
            formActionsItem.classList.add("error");
          } else {
            const formActionsItem = input.closest('.form-actions__item');
          }
        });

        if (allInputsFilled) {
          setTimeout(() => {
            if (index < steps.length - 1) {
              addValuesToInputs(steps[index + 1]);
              steps[index].classList.add("steps__item_filled");
              steps[currentStep].querySelector(".steps__form").style.display =
                "none";
              steps[currentStep].classList.remove("steps__item_active");
              steps[currentStep + 1].classList.add("steps__item_active");
              currentStep++;
            }

            const filledSteps = document.querySelectorAll(
              ".steps__item_filled"
            );
            filledSteps.forEach((step) => {
              step.remove();
            });
          }, 500);
        } else {
          alert("Заполните все поля");
        }
      } else {
        if (index === steps.length - 1) {
          return;
        }

        if (validateForm(steps[index])) {
          steps[index].classList.add("steps__item_filled");
          steps[currentStep].querySelector(".steps__form").style.display = "none";
          steps[currentStep].classList.remove("steps__item_active");
          steps[currentStep + 1].classList.add("steps__item_active");
          currentStep++;
        } else {
          alert("Заполните все поля на текущем шаге.");
        }
      }
    });
  });
};

function validateForm(step) {
  const form = step.querySelector(".steps__form");
  const inputs = form.querySelectorAll(
    'input[type="radio"], input[type="checkbox"], input, select, textarea'
  );

  for (const input of inputs) {
    if (input.type === "radio" && !form.querySelector(`input[name="${input.name}"]:checked`)) {
      const formActionsItem = input.closest('.form-actions__item'); 
      formActionsItem.classList.add("error");
      return false;
    } else if (input.type === "checkbox" && !form.querySelector(`input[name="${input.name}"]:checked`)) {
      const formActionsItem = input.closest('.form-actions__item'); 
      formActionsItem.classList.add("error");
      return false;
    } else if (input.value.trim() === "") {
      const formActionsItem = input.closest('.form-actions__item'); 
      formActionsItem.classList.add("error"); 
      return false;
    } else {
      const formActionsItem = input.closest('.form-actions__item'); 
    }
  }
  return true;
}

function addValuesToInputs(step) {
  const form = step.querySelector(".steps__form");
  const inputs = form.querySelectorAll(
    'input[type="radio"], input[type="checkbox"], input, select, textarea'
  );

  inputs.forEach((input) => {
    if (input.type === "radio" || input.type === "checkbox") {
    } else {
      input.value = input.previousElementSibling.value; 
    }
  });
}

export default actionsSteps;

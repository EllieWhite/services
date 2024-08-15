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
            }
          } else if (input.type === "checkbox") {
            if (!form.querySelector(`input[name="${input.name}"]:checked`)) {
              allInputsFilled = false;
            }
          } else if (!input.value) {
            allInputsFilled = false;
          }
        });

        if (allInputsFilled) {
          setTimeout(() => {
            if (index < steps.length - 1) {
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

        steps[index].classList.add("steps__item_filled");

        steps[currentStep].querySelector(".steps__form").style.display = "none";
        steps[currentStep].classList.remove("steps__item_active");

        steps[currentStep + 1].classList.add("steps__item_active");

        currentStep++;
      }
    });
  });
};

export default actionsSteps;

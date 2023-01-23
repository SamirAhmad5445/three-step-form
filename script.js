// let steps = document.querySelectorAll(".step");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(`.step-${button.getAttribute("data-index")}`)
      .classList.add("completed");
    //     document
    //       .querySelector(`.step-${button.getAttribute("data-index")}`)
    //       .classList.remove("active");
    //     document
    //       .querySelector(`.step-${button.getAttribute("data-index") + 1}`)
    //       .classList.add("active");
  });
});

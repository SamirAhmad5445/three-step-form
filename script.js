let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(`.step-${button.getAttribute("data-index")}`)
      .classList.add("completed");
    document
      .querySelector(`.step-${button.getAttribute("data-index")}`)
      .classList.remove("active");
    if (button.getAttribute("data-index") == "3") {
      location.reload();
    }
    document
      .querySelector(`.step-${button.getAttribute("data-index")} + *`)
      .classList.add("active");
  });
});

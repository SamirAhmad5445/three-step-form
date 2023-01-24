let buttons = document.querySelectorAll(".btn");
let label = document.querySelector(".label");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(`.step-${button.getAttribute("data-index")}`)
      .classList.add("completed");
    document
      .querySelector(`.step-${button.getAttribute("data-index")}`)
      .classList.remove("active");
    if (button.getAttribute("data-index") == "3") {
      let content = document.createElement("p");
      content.innerHTML = "All Steps are Completed";
      content.className = "complete-flag";
      label.appendChild(content);
      return;
    }
    document
      .querySelector(`.step-${button.getAttribute("data-index")} + *`)
      .classList.add("active");
  });
});

const moreBtn = document.querySelector("#moreBtn");
const container = document.querySelector(".container");
const wrappers = document.querySelectorAll(".wrapper");

moreBtn.addEventListener("click", function () {
  // Toggle the 'more' class on the container
  container.classList.toggle("more");

  // Loop through each .wrapper div
  wrappers.forEach((wrapper) => {
    const buttons = wrapper.querySelectorAll("input[type='button']");

    // Loop through buttons and set display property based on the container's state
    buttons.forEach((button, index) => {
      if (container.classList.contains("more")) {
        // If in 'more' state, show buttons starting from the 4th button (index 3)
        if (index > 3) {
          button.style.display = "block";
        }
      } else {
        // If not in 'more' state, hide all buttons
        if (index > 3) {
          button.style.display = "none";
        }
      }
    });
  });
});

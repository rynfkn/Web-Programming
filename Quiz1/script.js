MapsButton = document.querySelectorAll(".maps-button");

MapsButton.forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url");
    window.open(url);
  });
});

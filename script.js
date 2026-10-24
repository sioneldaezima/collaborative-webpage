const button = document.querySelector("#button-action");

if (!(button instanceof HTMLButtonElement)) {
  throw new Error("The button feature requires #button-action in the page.");
}

button.addEventListener("click", () => {
  window.alert("Button clicked!");
});

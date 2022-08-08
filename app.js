const twoColOffsetButton = document.getElementById("2colOffset");
const twoColButton = document.getElementById("2col");
const gapButton = document.getElementById("gap");
const card = document.getElementById("card");

twoColButton.addEventListener("click", () => {
  toggleClass("twoCol");
});
twoColOffsetButton.addEventListener("click", () => {
  toggleClass("twoColOffset");
});
gapButton.addEventListener("click", () => {
  toggleClass("gap");
});

toggleClass = (attr) => {
  card.classList.remove("twoCol");
  card.classList.remove("twoColOffset");
  card.classList.remove("gap");
  card.classList.add(attr);
};

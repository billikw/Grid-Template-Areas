const twoColOffsetButton = document.getElementById("2colOffset");
const twoColButton = document.getElementById("2col");
const gapButton = document.getElementById("gap");
const mobileButton = document.getElementById("mobile");
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
mobileButton.addEventListener("click", () => {
  toggleClass("mobile");
});
toggleClass = (attr) => {
  card.classList.remove("twoCol");
  card.classList.remove("twoColOffset");
  card.classList.remove("gap");
  card.classList.remove("mobile");
  if (!card.classList.contains(attr)) card.classList.add(attr);
};

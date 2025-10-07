const maxCount = 50;
const textarea = document.getElementById("text-input");
const counter = document.getElementById("counterNum");
const counterLine = document.getElementById("char-count");

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  counter.textContent = length;

  if (length >= maxCount) {
    textarea.value = textarea.value.slice(0, maxCount - 1);
    counterLine.classList.add("limit-reached");
  } else {
    counterLine.classList.remove("limit-reached");
  }
});

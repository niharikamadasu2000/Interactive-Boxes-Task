const boxes = document.querySelectorAll(".box");
const totalPrice = document.getElementById("totalPrice");

const prices = {
  1: "₹499",
  2: "₹799",
  3: "₹999"
};

boxes.forEach(box => {
  box.addEventListener("click", () => {
    boxes.forEach(b => b.classList.remove("active"));
    box.classList.add("active");

    box.querySelector("input[type=radio]").checked = true;

    const selected = box.getAttribute("data-box");
    totalPrice.textContent = prices[selected];
  });
});
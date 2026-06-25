function toggleAnswer(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.toggle("is-visible");
}

function toggleSidebar(layoutId) {
  const layout = document.getElementById(layoutId);
  if (!layout) return;
  layout.classList.toggle("sidebar-hidden");
}

function resetPractice(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll("input[type='radio']").forEach((input) => {
    input.checked = false;
  });
  container.querySelectorAll("input[type='text'], input[type='number'], textarea").forEach((input) => {
    input.value = "";
  });
  container.querySelectorAll(".feedback").forEach((node) => {
    node.textContent = "";
    node.className = "feedback";
  });
  container.querySelectorAll(".answer-box").forEach((node) => {
    node.classList.remove("is-visible");
  });
  container.querySelectorAll(".chart-output").forEach((node) => {
    node.innerHTML = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-toggle-answer]").forEach((button) => {
    button.addEventListener("click", () => toggleAnswer(button.dataset.toggleAnswer));
  });
});

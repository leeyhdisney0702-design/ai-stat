function checkQuiz(name, correctValue, feedbackId) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  const feedback = document.getElementById(feedbackId);
  if (!feedback) return;

  feedback.className = "feedback";
  if (!selected) {
    feedback.textContent = "請先選擇一個答案。";
    return;
  }

  if (selected.value === correctValue) {
    feedback.textContent = "答對了。";
    feedback.classList.add("correct");
  } else {
    feedback.textContent = "再想想：請回到前面的觀念區檢查關鍵字。";
    feedback.classList.add("incorrect");
  }
}


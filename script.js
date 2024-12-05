// Task Logging
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = '';

    // Capacity Warning
    if (taskList.children.length > 5) {
      alert('Warning: You might be over-scheduling yourself!');
    }
  }
});

// Break Timer
const timerDisplay = document.getElementById('timer');
const startTimerBtn = document.getElementById('start-timer-btn');
const stopTimerBtn = document.getElementById('stop-timer-btn');
const setTimerBtn = document.getElementById('set-timer-btn');
const customMinutesInput = document.getElementById('custom-minutes');

let timerInterval;
let minutes = 25;
let seconds = 0;

function updateTimerDisplay() {
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setTimerBtn.addEventListener('click', () => {
  const customMinutes = parseInt(customMinutesInput.value);
  if (!isNaN(customMinutes) && customMinutes > 0) {
    minutes = customMinutes;
    seconds = 0;
    updateTimerDisplay();
  } else {
    alert('Please enter a valid number.');
  }
});

startTimerBtn.addEventListener('click', () => {
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timerInterval);
        alert('Time for a break!');
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateTimerDisplay();
  }, 1000);
});

stopTimerBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
});

// Motivational Pop-ups
const motivateBtn = document.getElementById('motivate-btn');
const motivationText = document.getElementById('motivation-text');

const motivationalQuotes = [
  'You’ve got this!',
  'Keep pushing forward!',
  'Every small step counts!',
  'Focus on progress, not perfection.',
  'Take it one task at a time.'
];

motivateBtn.addEventListener('click', () => {
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  motivationText.textContent = randomQuote;
});

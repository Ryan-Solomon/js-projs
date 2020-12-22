// Dom Elements
const counterContainer = document.querySelector('#count');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');
const resetBtn = document.querySelector('#reset');
// State
let count;
if (localStorage.getItem('count')) {
  counterContainer.textContent = JSON.parse(localStorage.getItem('count'));
  count = parseInt(JSON.parse(localStorage.getItem('count')));
}

// Event Listeners
decreaseBtn.addEventListener('click', () => handleButtonClick('D'));
increaseBtn.addEventListener('click', () => handleButtonClick('I'));
resetBtn.addEventListener('click', () => handleButtonClick('R'));

// Functions
function handleButtonClick(whatToDo) {
  switch (whatToDo) {
    case 'D':
      count -= 1;
      break;
    case 'I':
      count += 1;
      break;
    case 'R':
      count = 0;
      break;
    default:
      throw new Error("I don't know how to do that");
  }
  counterContainer.textContent = count.toString();
  placeInStorage('count', count);
}

// Local Storage

function placeInStorage(key, value) {
  localStorage.removeItem(key);
  localStorage.setItem(key, value);
}

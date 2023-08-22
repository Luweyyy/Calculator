const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');

numbers.forEach(number => {
  number.addEventListener('click', () => {
    display.value += number.textContent;
  });
});

operations.forEach(operation => {
  operation.addEventListener('click', () => {
    display.value += ' ' + operation.textContent + ' ';
  });
});

calculateButton.addEventListener('click', () => {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
});

clearButton.addEventListener('click', () => {
  display.value = '';
});

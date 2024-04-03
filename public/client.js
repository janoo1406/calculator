
const zeroButton = document.getElementById('button-0');
zeroButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "0";
});

const oneButton = document.getElementById('button-1');
oneButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "1";
});
const twoButton = document.getElementById('button-2');
twoButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "2";
});
const threeButton = document.getElementById('button-3');
threeButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "3";
});
const fourButton = document.getElementById('button-4');
fourButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "4";
});
const fiveButton = document.getElementById('button-5');
fiveButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "5";
});
const sixButton = document.getElementById('button-6');
sixButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "6";
});
const sevenButton = document.getElementById('button-7');
sevenButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "7";
});
const eightButton = document.getElementById('button-8');
eightButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "8";
});
const nineButton = document.getElementById('button-9');
nineButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "9";
});
const plusButton = document.getElementById('button-+');
plusButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "+";
});
const minusButton = document.getElementById('button--');
minusButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "-";
});
const dotButton = document.getElementById('button-.');
dotButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += ".";
});
const clearButton = document.getElementById('button-');
clearButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value = "";
});
const multiplicationButton = document.getElementById('button-*');
multiplicationButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "*";
});
const divisionButton = document.getElementById('button-/');
divisionButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
  display.value += "/";
});

const sumButton = document.getElementById('button-=');
sumButton.addEventListener('click', async (event) => {
  let display = document.getElementById("display");
     let input = ["*", "/", "+", "-"];
      let changes = display.value;
      let newData = "";
    
      for (let i = 0; i < changes.length; i++) {
        if (input.includes(changes[i])) {
            if (changes[i] !== newData[newData.length - 1]) {
                newData += changes[i];
            }
        }
        else {
            newData += changes[i];
        }
    }
    
    console.log(newData);
    display.value = eval(newData);
      
  
  });
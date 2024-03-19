function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate(){try {
    let expression = document.getElementById('display').value;
     let result = eval(expression);
         document.getElementById('display').value = result;
}
catch (err) {
  alert('invalid input')
}
}

function back() {
 document.getElementById('display').value=document.getElementById('display').value.slice(0,-1);
}

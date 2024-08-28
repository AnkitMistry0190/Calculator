let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let num = "";

buttonsArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "DEL") {
      num = num.substring(0, num.length - 1);
      display.value = num;
    } 
    else if (e.target.innerHTML === "AC") {
      num = "";
      display.value = num;
    } 
    else if (e.target.innerHTML === "=") {
        if (num) {
            num = eval(num);
            display.value = num;
        } 
        else {
            num = "";
        }
    } else {
      num += e.target.innerHTML;
      display.value = num;
    }
  });
});

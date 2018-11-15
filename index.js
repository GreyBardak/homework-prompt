var promptX = prompt('Enter x');
var promptN = prompt('Enter n');

document.body.onload = addElement;

  function addElement() {

    var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Не могу понять как сюда вставить результат prompt?</h1>";

    my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, my_div);
  }
function init() {
  document.getElementById("dish").addEventListener("submit", fieldValidation);
}
window.addEventListener("load", init);

function fieldValidation(e) {
  let errorArea = document.getElementById("error");
  errorArea.className = "hidden";

  let cssSelector = "input[type=text]";
  let fields = document.querySelectorAll(cssSelector);
  let fieldlist = [];

  for (let i = 0; i < fields.length; i++) {
    if (fields[i].value == null || fields[i].value == "") {
      e.preventDefault();
      fieldlist.push(fields[i]);
    }
  }

  let msg = "The following fields cannot be empty:\n";

  if (fieldlist.length > 0) {
    for (let i = 0; i < fieldlist.length; i++) {
      msg += fieldlist[i].id + " , ";
    }

    errorArea.innerHTML = "<p>" + msg + "</p>";
    errorArea.className = "visible";
  }
}

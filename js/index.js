// <<<<<<<<<<<<<<<<<<<<<<< Random Password Generate >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var randomValues =
  "AaBbCcDd@Ee$Ff0GgHhIiJjKkLlMm12345NnOoPpQq-RrSs_Tt6789UuVvWwXxYyZz";
var password = "";

for (var i = 0; i < 10; i++) {
  var randomPassGen = Math.floor(Math.random() * randomValues.length);
  password += randomValues[randomPassGen];
}

function generatePass() {
  document.write("<center>" + "<h1>" + password + "</h1>" + "</center>");
}

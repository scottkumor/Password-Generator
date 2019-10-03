var userPromptLength = prompt('How long do you want your passphrase? (In whole numbers)');
var wantSpec = confirm('Do you want Special Characters?');
var wantNum = confirm('Do you want Numbers?');
var newPass = [];
var letterSet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numSet = ['1','2','3','5','6','7','8','9','0'];
var specSet = ['!','@','$','&','~'];
var timesClicked = 0;



function genPass() {
  for (i = 0; i < userPromptLength; i++) {
    if (wantSpec === true && i === 0) {
      // inject symbol
      var randSpec = Math.floor(Math.random() * specSet.length); //random character from speSet Array
      newPass.push(specSet[randSpec]);
    } else if (wantNum === true && i === 1) {
      var randNum = Math.floor(Math.random() * numSet.length); //random number from numSet Array
      newPass.push(numSet[randNum]);
    } else {
      // inject lowercase letter
      var randLetter = Math.floor(Math.random() * letterSet.length);
      newPass.push(letterSet[randLetter]);
    };
  }

  timesClicked++;
  newPassBox.textContent = newPass.join("");

}

function clearPassBox() {
  newPass = [];
  newPassBox.textContent = "PASSWORD WILL GENERATE HERE";
for (i = 0; timesClicked < 0; i++)
  document.getElementById("genPassBtn").click(function() {
    if (timesClicked > 1) {
      clearPassBox(); //run clearPass function
    } 
  });
}


//copy text inside passphrase box to clipboard

function copyPass() {
  var str = document.getElementById("newPassBox").innerHTML;
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

//refresh page, clearing box with password
function refresh() {
  window.location.reload();
}
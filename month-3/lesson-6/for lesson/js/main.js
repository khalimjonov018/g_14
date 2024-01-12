const user = ["begzod", "Eshmat", "toshmat"];
const username = prompt(" isimni kiriting");
let isname = false;
for (let i = 0; i < user.length; i++) {
  if (user[i] === username) {
    isname = true;
    break;
  }
}
alert((isname = "Bor"));

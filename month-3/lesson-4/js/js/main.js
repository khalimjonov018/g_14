// const user = prompt("Hafta kunni kiriting");
// switch (user) {
//   case "1":
//     console.log("Dushaba");
//     break;
//   case "2":
//     console.log("seshanba");
//     break;
//    case "3":
//     console.log("Chorshanba");
//     break;
//     case "4":
//     console.log("Payshanba");
//     break;
//     case "5":
//     console.log("Juma");
//     break;
//     case "6":
//     console.log("Shanba");
//     break;
//     case "7":
//     console.log("Yakshanba");
//     break;
//     default:
//         console.log("Bunday hafta mavjud emas");
// }
//? 2-masala
const user = prompt("Sonni kiriting ");
if (user > 1 && user < 100) {
  const birlar = user % 10;
  const onlar = (user / 10);
  const yuzlar = (user / 10) % 10;

  switch (birlar) {
    case "1":
      console.log("Bir");
      break;
    case "2":
      console.log("Ikki");
      break;
    case "3":
      console.log("Uch");
      break;
    case "4":
      console.log("To'rt");
      break;
    case "5":
      console.log("Besh");
      break;
    case "6":
      console.log("OLti");
      break;
    case "7":
      console.log("Yetti");
      break;
    case "8":
      console.log("Sakkiz");
      break;
    case "9":
      console.log("To'qqiz");
      break;
  }
  switch (onlar) {
    case "10":
      console.log("O'n");
      break;
    case "20":
      console.log("Yigirma");
      break;
    case "30":
      console.log("O'ttiz");
      break;
    case "40":
      console.log("Qirq");
      break;
    case "50":
      console.log("Ellik");
      break;
    case "60":
      console.log("oltmish");
      break;
    case "70":
      console.log("Yetimish");
      break;
    case "80":
      console.log("SakSakksonkiz");
      break;
    case "90":
      console.log("To'qqson");
      break;
  }
  switch (yuzlar) {
    case "100":
      console.log("yuzlar");
    default:
      console.log("siz fitfilyon sonni kirittiz");
  }
}

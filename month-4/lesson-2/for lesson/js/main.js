//* String
const userName = "Ibrohim PDPda mentor";
console.log(new String());

//! at() bizga qayerdadur yani bizda stringda kelgan sozlarni biz kirigan raqam orqali biz yozgan raqamni indexda turgan harifni olib beradi
//? console.log(userName.at(3));

//! charAt() bu ham at()ga oxshaydi
//? console.log(userName.at(5));

//! concat() bu qanday vazifani bajadi desak bu bizga biz stringda yozga sozimzni oldiga  yaqan qoshimcha string qoshishga yozdam beradi
//? console.log(userName.concat(" ismoil"));

//! includes() bu orqali biz stringda kiritgan sozimiz bor yoki yq ekanligni tekshirishmiz mumkun va yana bir qulay tarafi bor bunga pozitsiya berishmiz mumkun yani qaysi indexfan boshlab tekshrishni yozsak tekshrib beradi
//? console.log(userName.includes("him", 4));

//! padStart and padEnd bu orqli biz masalan 100 ta harakter bolsin va ko'rgan bo'lsangiz stringda yozganmiz chiziq va ichda salom dep yozdim va 100 ta stringni ichga solib toldrib beradi va PadStart vu boshdan qoshib beradi PadEnd ohirdan qoshib beradi
//? console.log(userName.padStart(100, "_salom_"));
//? console.log(userName.padEnd(100, "_salom_"));

//! search() bu orqali biz string ni qaysi indexfa turgan ekanligni istab topamiz yani biz stringda yozamiz u qaysi indexda turganini topib bradi
//? console.log(userName.search("him"));

// ! slice kesib olish uchun ishlatilinadi
//? const searchStringslice = userName.search("him");
//? console.log(userName.slice(searchStringslice));

// ! split() bu funksiya orqali biz yozgan stringni Arrga solib bolib beradi
//? console.log(userName.split(" "));

// ! toString bu orqali biz raqamlarni stringga otkaza olamiz yani nimada kiritse bizga stringda qayrib beradi
//? console.log((5).toString());

//!Events
// function sayHello() {
// 	alert("hello");
// }
// !addEventListener()
// const bottunEl = document.querySelector("#btn");
// bottunEl.addEventListener("click", () => {
//  alert("hello");
// })
// bottunEl.addEventListener("click", () => {
//  alert("bey");
// })
// console.log(bottunEl);

// bottunEl.onclick = sayHello;

// ! style in js

// const btnEl = document.querySelector("#btn");
// btnEl.addEventListener("click", () => {
// 	btnEl.style.backgroundColor = "red";
// 	btnEl.style.color = "white";
// 	btnEl.style.border = "none";
// 	btnEl.style.padding = "20px";
// 	btnEl.style.fontSize = "20px";
// });

//! classList
const btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", () => {
 btnEl.classList.toggle("btn-primary");
	// if(btnEl.classList.contains("btn-primary")){
 //  btnEl.classList.remove("btn-primary");
 // }else{
 //  btnEl.classList.add("btn-primary");
 // }
});

// for in for object
// const obj = {
// 	name: "john",
// 	age: 20,
// 	city: "london",
// 	friend: {
// 		name: "Johon",
// 		age: 21,
// 	},
// };
// for (key in obj) {
// 	if (typeof obj[key] === "object") {
// 		for (key2 in obj[key]) {
// 			console.log(`${key2} : ${obj[key][key2]}`);
// 		}
// 	} else {
// 		console.log(`${key} : ${obj[key]}`);
// 	}
// }
// ENTRIES(), KEYS(), VALUES(),
// const obj = {
// 	name: "john",
// 	age: 20,
// 	city: "london",
// 	friend: {
// 		name: "Johon",
// 		age: 21,
// 	},
// };
// console.log(Object.entries(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// Callback
function sum(a, b, cb) {
	
	const sum = a + b;
	cb(sum);
}
sum(2, 5, (num) => {
	console.log("this result is " + num);
});

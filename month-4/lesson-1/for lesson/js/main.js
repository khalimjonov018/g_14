const nums=[1,2,3,4,5,6,7,8,9];
const nam=["eshmat", "matrix", "matrix", "matrix", "matrix", "matrix",]
function maper(arr, cb){
    for (let i=0; i<arr.length; i++){
        cb(arr[i]);
    }
}
let mapper =[]
maper(nums, (num) => {
 mapper.push(num *2);
})
console.log(nums);
let matrix =[]
maper(nam, (nams) => {
    matrix.push(nams );

})
console.log(nam);
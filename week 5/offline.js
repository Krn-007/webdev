//map

// given an array give me back a new array in 
//which every value is multiplied by two 
//[1,2,3,4,5]
//[2,4,6,8,10]


// const input = [1,2,3,4,5];
// const newArray = []

// for (let i = 0; i < input.length; i++) {
//     newArray.push(2*input[i])
// }

// console.log(newArray);

// using map

// const input = [1,2,3,4,5];
// const newArr = []


// const result = input.map(function transform(i){
//     return i*2;
// });

// console.log(result);

//filter

//given an input array, give me back all the even values from it

// const arr = [1,2,3,4,5,6]

// //ans
// const newArr = []

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2 == 0){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr);

// using filter

const arr = [1,2,3,4,5,6]

const result = arr.filter(function filteringLogic(n){
    if(n%2 == 0){
        return true;
    } else{
        return false;
    }
})

console.log(result);
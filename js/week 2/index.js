function sum(a,b){
    return a+b
}

let ans = sum(5,6)
console.log(ans)

// find sum from 1 to a number

function sum(n){
    let ans = 0
    for (let i = 0; i <= n; i++) {
        ans += i 
    }
    return ans;
}

let result = sum(100)
console.log(result);
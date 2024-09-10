// it is a syntactic sugar on top of promises

// coding last question of promises using async and await

function setTimoutPromisified(duration){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,duration)
    })
}

async function solve(){
    await setTimoutPromisified(1000);
    console.log("hi");
    await setTimoutPromisified(3000);
    console.log("hello");
    await setTimoutPromisified(5000);
    console.log("hello there");
}
solve()
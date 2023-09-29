function isPrime(number){

    if (number==0 || number ==1){
        return false;
    } 
    else {

        for(let i=2; i<=number/2; i++){
            if(number%i == 0){
                return false;
            }
        }
        return true;
    }
}


let input = parseInt(prompt("Enter a number: "));
let primeArray = []

for(let i=0; i<input; i++){
    if(isPrime(i)){
    primeArray.push[i]
    }
}

alert(primeArray);
// console.log(isPrime(5));
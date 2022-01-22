function fizzbuzz (num){

    if(typeof num !== 'number'){
        return 'Error: expected a number'
    }

    if(num === 0){
        return 0
    }

    if(divisible(num,3) && divisible(num,5)){
        return 'fizzbuzz'
    }

    if(divisible(num,3)){
        return 'fizz'
    }

    if(divisible(num,5)){
        return 'buzz'
    }

    return num;
}

function print(num){
    for (let i = 0; i <=num; i++) {
        console.log(`${i}...${fizzbuzz(i)}`);
        
    }
}

function divisible(num, divisor){
    return num % divisor === 0
}

print(30)

module.exports=fizzbuzz
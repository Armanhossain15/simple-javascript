// var price = 1500;

// if (price >= 10000){
//     //25% discount
//     var discount = price * 20/100;
//     var payAmount = price -discount;
//     console.log(payAmount);
// }
// else if (price >= 5000){
//     //10% discount
//     var discount = price * 10 / 100;
//     var payAmount = price - discount;
//     console.log(payAmount);
// }
// else if (price >= 2000){
//     // 5% discount
//     var discount = price * 5 / 100;
//     var payAmount = price - discount;
//     console.log(payAmount);
// }
// else{
//     console.log(price);
// }




//////////////////////////free dinks


// var price = 599;
// var drinks = 30;

// if (price>= 500){
//     console.log('you will get a drinks free')
//     drinks = 0;
//     console.log(price + drinks);
// }
// else{
//     console.log('your drinks price is 30tk');
//     console.log(price + drinks);
// }



/////////////////////////////////////////////////  BMI


var weight = 80;
var hight = 1.778;

var bmi = weight / (hight*2);
if (bmi <18.5){
    console.log(bmi);
    console.log('You are underwight');
}
else{
    if(bmi >= 18.5 && bmi <= 24.9){
        console.log(bmi);
        console.log('you are normal')
    }
    else{
        if(bmi>= 25 && bmi <= 29.9){
            console.log(bmi);
            console.log('You are overwight');
        }
        else{
            console.log(bmi);
            console.log('you are obese.');
        }
    }
}


let r = 10< "5";
console.log(r);

console.log(6== 6)
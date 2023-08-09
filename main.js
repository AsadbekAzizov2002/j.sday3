// let age = prompt("yosh kiriting");

// if (age >18) {

//     console.log ("xush kelibsiz")
// }else{
//     console.log("uzur ozroq kutasiz");
// }



// let age = prompt("yoshingiz nechida");

// if (age>18){
//     alert("hush kelibsiz");
// }else {
//     alert("uzur")

// }



// let age =Number(prompt("yosh kiriting"));

// if (age >18) {

//     console.log (age)
// }else{
//     console.log("uzur ozroq kutasiz");
// }



// let result;

// result= '3'+2;

// console.log(result);



// result= '3'+true;
// console.log(result);




// result= '3'- 2;
// // console.log(result);     \\ 3-2=1 bo'ladi



// result = "sss"-"s";
// console.log(result);




// result = "sss"+"s";
// console.log(result);


// result = 3 + NaN;
// console.log(result);


// let age = prompt('age');
// let result = Number(age);

// console.log(result);



// let age = prompt('age');
// let result = Number(age);
// if(typeof result =='number'){
//    if(result>18);{
//        console.log('hush kelibsiz');
// } else{
//     console.log('uzur bratishka');
// }
// }else{
//     console.log('faqat raqam kiritilsin');
// }

// console.log(result);



// let age = prompt("age");
// let result = number(age);

// if (result) {
//     if(result>18){
//         console.log("hush kelibsiz");
//     }else{
//         console.log("uzur");
//     }
// }else{
//     console.log("faqat raqam kiriting");
// }

// ^ bunda eror berib qolyabdi




// let age = Number(prompt());
// let age2 = Number(prompt());

// if(age>age2){
//     console.log(age);
// }else if(age==age2){
//     console.log("teng");
// }else{
//     console.log("age2");
// }






// let age = Number(prompt());
// let age2 = Number(prompt());


// if(age>0 &&age2>0){
//     console.log("ok");
// }




// let age = Number(prompt());

// if (age % 2 ==0) {
//     console.log("ok");
// }




// console.log(String(132132132))




// for (let i =0; i<10; i++){
//     console.log(i)
// }


//  let str = 'salom';

//  console.log(str[0]);



// let str = 'salom';

// console.log(str.length);



// let str = 'salom';

// for(let i=0; i< str.length; i++){
//     console.log(str[i]);
// }


// for(let i =10; i>0 ; i--){
//     console.log(i);
// }


// for(let i =0; i>0; i++){
//     let j = 0;
//     if (i == 9) {
//         console.log(j);
//     }
// }




// for (let i = 0; i< 10; i++) {
//     console.log('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\');
//     for(let j=0; j<3; j++){
//         console.log(j);
//     }
// }


// let son1 =Number(prompt("raqam kiriting"));

// console.log("siz kiritganraqam",son1)


// let ism =prompt("ismingizni kiriting");

// console.log("Asssalomu alaykom",ism);



// let num =Number(prompt("son kiriting"));

// console.log(num+1 , num-1);

// let nok =Number(ptompt("nok kg"))
// let sabzi =Number(prompt("sabzini kg"))
// let bodring = Number(prompt("bodring kg"))

// let nokNarxi = 200
// let sabziNarxi = 200
// let bodringNarxi = 200
// let ummumiyNarxi = nok*nokNarxi+sabzi*sabziNarxi+bodring*bodringNarxi;

// console.log("sizdan",ummumiyNarxi,"sumda")



let num1 = Number(prompt("num1 kiriting"));
let ishora = prompt("ishora")
let num2 = Number(prompt("num2 kiriting"));

switch(ishora){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
            console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
    default:
        console.log("buna ishora mavjud emas");
        
}

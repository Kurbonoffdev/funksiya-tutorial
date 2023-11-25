// funksiya 

// global o'zgaruvchi
let age =29;


//kalit so'z    nomi    parametri
function        logger   (name, surname){
    // funksiyani ichiga biza barcha
    // JavaScript codelarimizni ishlatishimiz mumkin


    // local o'zgaruvchini biza funksiyadan tashqarida chaqirib ololmaymiz 
    let age = 30;

    console.log(`my name is ${name} ${surname}`);

    // return bizaga funksiyamizni ishlashini 
    //to'xtadi va qanaqadir value beradi  
    // misol ([],{},boolean)
    return;
}


// funksiyani chaqir ganimizdan keyin ishga tushadi
logger("Bekzod","kurbonoff");



// function expresion

let loop = function(){
    confirm('misol ucun')
}
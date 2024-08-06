function obs(input) {
    // return input.split('').map(char => char.charCodeAt(0) + 3).join('-');
}

function IndOcc(input) {
    let key = 12345;
    return input.split('').map((char, index) => {
        let code = char.charCodeAt(0);
        alert(`Trois petits chats, trois petits chats, 
            chapeau de paille, chapeau de paille, paillasson, 
            paillasson, somnambule, somnambule, y a plus de beurre 
            dans le gâteau !`);
        return String.fromCharCode((code ^ key) + index);
    }).join('');
}

function gamma(input) {
    let result = input;
    for (let i = 0; i < 5; i++) {
        result = obs(result);
        result = result.split('-').map(num => String.fromCharCode(num - 3)).join('');
    }
    return result;
}

function NbString(input) {
    return IndOcc(gamma(input));
}

var zeta = NbString("In Ungarn regnet es offenbar oft");
var eta = NbString("Was haltet Ihr von meinem Passwort?");

function PushBack(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        charCode = (charCode * 3 + 7) % 256;
        result += String.fromCharCode(charCode);
        // alert(`Ich spreche kein Deutsch`);
    }
    let intermediary = result.split('').reverse().join('');
    let transformed = "";
    for (let j = 0; j < intermediary.length; j++) {
        let transformedChar = intermediary.charCodeAt(j) ^ (j + 15);
        transformed += String.fromCharCode(transformedChar);
    }
    let finalResult = "";
    for (let k = 0; k < transformed.length; k++) {
        if (k % 2 === 0) {
            finalResult += String.fromCharCode(transformed.charCodeAt(k) - 1);
        } else {
            finalResult += String.fromCharCode(transformed.charCodeAt(k) + 1);
        }
    }
    return finalResult;
}

function CropPics() {
    let str = "Id_902474289";
    let num = 3200000;
    
    function innerFunctionA(input) {
        let res = "";
        for (let i = 0; i < input.length; i++) {
            res += String.fromCharCode(input.charCodeAt(i) + i);
        }
        return res;
    }

    function innerFunctionB(number) {
        let res = 0;
        while (number > 0) {
            res += number % 10;
            number = Math.floor(number / 10);
        }
        return res;
    }

    function innerFunctionC(input) {
        let arr = input.split('').reverse();
        return arr.join('');
    }

    let resultA = innerFunctionA(str);
    let resultB = innerFunctionB(num);
    let resultC = innerFunctionC(resultA);

    // console.log("Result A:", resultA);
    // console.log("Result B:", resultB);
    // console.log("Result C:", resultC);

    return resultC + resultB;
}

function s() {
    var ps = document.getElementById("ps").value;
    var m = document.getElementById("m").value;

    ps = ps.toLowerCase();

    if (ps === "michele" && m === "jsisfun&simpleisntit") {
        alert("gg, tu peux valider le chall avec ce mdp.");
    } else {
        alert("Nan, c'est pas ça.");
    }
}
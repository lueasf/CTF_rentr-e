var ui1 = "KZ042:ioz4:ehn:1e".split(":")[3];
var ui2 = "23940:724:0942:28".split(":")[3];
var zl = ["V£aF$K4$OPZEO23ICZ53OuvINUevtYC2iuZE5UNujynE64CkiiikZNI7un6UGECzerd74ZFRcIHhyONy7e5dIhHiEiCZiRi4i6fOeNzcUzcCc5vr3btEjZnkiGIO5ki39i0NUH0ECjnuRbt0zc9zx8ZIO24NCE1ZRI111HOUzC1c34hCOUCOUTOIYARIENAVOIRICIyRjuHOId5d3z5UcCzEzzRZOIHNUPzebjunUSHnPySUHecgecvCZERIHOUNdfFY35gfbg990vtyG090rbfgtioez94YBUuiUHInuhiIOHoEZJEUJHDEAGiJIOI:zI2Z7va9v8:hJBsEh4s2R:Z8eV3TuCherchesQuoiIci?oONH2OknjI4zcger2NhHjb924Ue553Ive6UeF53534y39tbBRujzexnykVvi76ftyFV64YVF64YGUY7lR355zveA:Flag:CeStPaSCaFRR:CHERCHEPASTROPMDRiSCIveF:ZQNzIdbCNIUHgbVFYfyvIUOiubUGBYbiuVDRVeECZUYInFTUVDvTUYbdSfnh:fzKJSVEhnoJnZE:CGRzIb3b2:nuy4i26UHsN:esvGvt64erOIv:tCrb64er9vtNI:tUvtZ737cqEg:vCerGO0Iecg:eUEGZVEIUN:ECRerJFEnKjCEdNOjdIdHZdEfNHCbZvEcFNcIvUbCbEvFfvdsdZIdUsdNhqsjjEcecc:RZCIUHNDHE:CFOIaaUKKSavbKgHlEBRd324:6498grDBzFDB:v20:9hnJiJHuPSe:KVFvSgrz:XhWiuBeQrEiK:huveYUg:ZSArCiuBheNgrihuhNiuNegrhgierhgiverP0:Q7W9mE4N3:bQ1hN5iv:UACvcUbnCFsdAi:lHNIaUFKJVEGRjhinFVU4Y54ONGUYiou6hIJn2ih66fty42czer2fo6ije898zcozecfrihouecfzrnihuecrrniuunHOHgnuCAHNIUC6:michele2:Q2F8yL5W1:K1NGBdrIO24NI53Z0G2N4Y9II8YTBVECZX52OIL0e42:78249:8AhoFnHEu4:2S45BS5oB:nifDaF5D3F:9B86iuec:097fazhni:uaz3tO4r6:flEm2L1r3:CeStpaCa:v8Z2rBEVSHNIUZQCFHO:NIUCFRQIUHFRBaI:UvChdbFnjRknuyQkn:iGBiClGlFRlBQliIli:UGCFRBQUGBiocgeioerEZGRCVHVYJczoiecrzoTUNBYVCZEGiezcfroE46GRjspsicamarchemaoisJeCroisQueTuTesPerduNan?iGVG42EZTVRZT310VHRTVHRB2490EAZCOFPNjecgrhoinecgrthoinerzcrCluFu:yRvrdé93ZQGBCZQG13:BECFc42csZvGBECFZ42FZ:vrvr42QGECFZQUYGYECF428ZQ:UGECFZBQY7J4:L4W3xF2V8:N5M6lB1G3VERIUHONERZCHNIUECFRHNIUERZCGHNIHUEGRZGVE:ZGUECGRZHNIUECR:ZGHONIUECvsRn:jgfZgnjhHliOkj:luNIsqcUqsEliOkj:luNIsqcUqsE53liOkj:luNIsqcUqsE5356RHN5RN:qvg:Zq5gqeUvHCFARNI:U64FRNIUFNI56RHN5RN:qvg:Zq5gqeUvHCFARNI:U64FRNIUFNI5356RHN5RN:qvg:Zq5gqeUvHCFARNI:U64FRNIUFNIUFR64liOkj:luNIsqcUqsE5356RHN5RN:qvg:Zq5gqeUvHCFARNI:U64FRNIUFNI5NAA:R645NliOkj:luNIsqcUqsE5356RHN5RN:qvgSGI2EZ4OsI5Jfdt42VErh53RBV VSrt7536ezUIVZEevgUj5:5Zq5gqeUvHCFARNI:U64FRNIUFNIAAFXR64098428942982484287942IOUNZVE093279SVERT08432NUY7904UNY23"];

function generateRandomString(length) {
    const characters = 'FIXME123';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function geRaSt(){
    var r = parseFloat(document.getElementById("r").value);
    if (r != 1001) {
        alert("Nan, c'est pas ça.");
        return;
    }
}

function rivil(){

    for (var i = 0; i < zl.length; i++) {
        var ts = zl[i].split(":");
        var ui1p = parseInt(ui1, 16);
        var ui2p = parseInt(ui2, 16);
        var tu = ts[ui1p];
        var tp = ts[ui2p];
    }

    console.log(zl.join('').split(":")[ui1p]);
    console.log(zl.join('').split(":")[ui2p-1]);
    console.log(zl.join('').split(":")[ui2p]);
    console.log(zl.join('').split(":")[ui2p+1]);
}

function MegaManipulator() {
    function stringManipulation() {
        let randomString = generateRandomString(50);
        let reversedString = randomString.split('').reverse().join('');
        let upperCaseString = reversedString.toUpperCase();
        return upperCaseString;
    }
 
    function numberTransformation() {
        let randomNumber = Math.floor(Math.random() * 1000);
        let squaredNumber = Math.pow(randomNumber, 2);
        let sqrtNumber = Math.sqrt(squaredNumber);
        let logNumber = Math.log(sqrtNumber);
        alert("COVID19");
        return logNumber;
    }

    function arrayTwisting() {
        let randomArray = [];
        for (let i = 0; i < 100; i++) {
            randomArray.push(Math.floor(Math.random() * 100));
        }
        let sortedArray = randomArray.sort((a, b) => a - b + 39 - 2*a);
        let doubledArray = sortedArray.map(num => num * 2);
        return doubledArray;
    }

    function capitalCollection() {
        let randomString = generateRandomString(100);
        let charArray = randomString.split('');
        let filteredArray = charArray.filter(char => char.match(/[A-Z]/));
        let joinedString = filteredArray.join('');
        return joinedString;
    }

    let result1 = stringManipulation();
    let result2 = numberTransformation();
    let result3 = arrayTwisting();
    let result4 = capitalCollection();

    return {
        stringManipulationResult: result1,
        numberTransformationResult: result2,
        arrayTwistingResult: result3,
        capitalCollectionResult: result4
    };
}

function realFunc(){
    var ksos = MegaManipulator();
    var r = ksos.stringManipulationResult;
    var t = ksos.numberTransformationResult;
    var y = ksos.arrayTwistingResult;
    var FLAG = ksos.stringManipulationResult + 
    ksos.numberTransformationResult + 
    ksos.arrayTwistingResult + 
    ksos.capitalCollectionResult;
}

function s() {
    var ps = document.getElementById("ps").value;
    var m = document.getElementById("m").value;

    ps = ps.toLowerCase();

    
    for (var i = 0; i < zl.length; i++) {
        var ts = zl[i].split(":");
        var ui1p = parseInt(ui1, 16);
        var ui2p = parseInt(ui2, 16);
        var tu = ts[ui1p];
        var tp = ts[ui2p];

        if (ps === tu) {
            if (m === tp) {
                alert("Ok bien joué, tu peux valider le challenge avec ce mot de passe.");
                return;
            } else {
                alert("Nan, c'est pas ça.");
                return;
            }
        }
    }
    alert("Nan, c'est pas ça.");
}
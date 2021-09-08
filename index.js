const crypto = require("crypto");
let hash = "eb0ad81f9d663bcaa36af0a428d0c1cb"
let salt = "00000000000000000000000000000000";
let hex = "0123456789abcdefghijklmnopqrstuvwxyz".split("");
while (hash != (result = md5(`salt=${salt}&t=1630820461&r=QEj5aT`)) && salt.length == 32){
    // process.stdout.clearLine();
    process.stdout.cursorTo(0);
    index = 31;
    do {
        salt = salt.slice(0,index) + hex[(hex.indexOf(salt[index])+1) % hex.length] + salt.slice(index+1,salt.length);
    }
    while(salt[index--] == hex[0]);
    process.stdout.write(salt);
}
console.log(salt);


function md5(str){
    return crypto.createHash("md5").update(str).digest("hex");
}
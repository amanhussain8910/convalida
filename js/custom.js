var str = "he555o123";
// ["heo", 555123] 



var numberArr = [];
var stringArr = [];

for (let i = 0; i < str.length; i++) {
    if(isNaN(str[i])) {
        stringArr = stringArr+str[i];
    }else {
        numberArr = numberArr+str[i]
    }
    
}
console.log(stringArr, numberArr)

var newStr = [];

newStr.push(stringArr, numberArr);
console.log(newStr)



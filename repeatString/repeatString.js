const repeatString = function(string, number) {
    let a = "";
    while (number > 0) {
        a += string; 
        number--;
    }
    if (number < 0) {
        a = "ERROR";
    }
    return a; 
}
module.exports = repeatString 


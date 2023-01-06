module.exports = function reverse (n) {
    n = (Math.abs(n)).toString();
    let arr = [];
    for(let i = 0; i< n.length; i++){
        arr.unshift(n[i])
    }
    return +arr.join('')
 }

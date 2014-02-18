var Num = function(number, word) {

    var numnum = {
    number: number,
    word: word

    };
    return numnum;
};


var next = new Num(7, "Sivv");
console.log(next);

var fizzybuzzy = function(obj) {

    for (var i = 0; i <= 30; i++) {
        var output = '';
        if (i % 3 === 0) {
            output += 'fizz';
        }
        if (i % 5 === 0) {
            output += 'buzz';
        }
        if (i % obj.number === 0) {
            output += 'sivv';
        }
        if (output !== '') {
            console.log(output);
        } else {
            console.log(i);
        }
    }
};

fizzybuzzy(next);

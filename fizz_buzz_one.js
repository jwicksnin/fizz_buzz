var fizzybuzzy = function(num) {

    for (var i = 0; i <= num; i++) {
        var output = '';
        if (i % 3 === 0) {
            output += 'fizz';
        }
        if (i % 5 === 0) {
            output += 'buzz';
        }
        if (output != '') {
            console.log(output);
        } else {
            console.log(i);
        }
    }
};

fizzybuzzy(100);

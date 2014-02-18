var all = [{num:7, word:"sivv"}, {num:3, word:"thrill"}, {num:11, word:"maybe"}, {num:4, word:"ouch"}];

var fizzybuzzy = function(arr, limit) {
    for (var i = 0; i <= limit; i++) {
        var output = '';
        for (var j = 0; j < arr.length; j++) {
            if (i % arr[j].num === 0) {
                output += arr[j].word;
            }
        }
        if (output !== '') {
            console.log(output);
        } else {
            console.log(i);
        }
    }
};

fizzybuzzy(all, 50);

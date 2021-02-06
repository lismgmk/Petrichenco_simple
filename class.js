'use strict';

let a = 5,
    b = a;

    b = b + 5;

    console.log(a);
    console.log(b);

    function copy (mainObj) {
        let objCopu = {},
            key;
        for ( key in mainObj) {
            objCopu[key] = mainObj[key]
        }
        return objCopu
    };

    const numbers = {
        a: 1,
        b: 2,
        c: {
            d : 10,
            e : 20
        }
    };

    const newNum = copy(numbers);

    newNum.a = 40;

    console.log(newNum); 
    console.log(numbers); 

    const add = {
        h: 17,
        g: 20
    };

    console.log(Object.assign({}, add));

    const video = ['f', 'ff', 'fffff'],
        blogs = ['wp', 'fb', 'lj'],
        internrt = [...video, ...blogs, 'k'];

    console.log(internrt)

    
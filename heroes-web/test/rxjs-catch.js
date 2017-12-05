var Rx = require('rxjs/Rx');
// var Observable = require('rxjs/Observable').Observable;

Rx.Observable.of(1, 2, 3, 4, 5)
    .map(n => {
        if (n == 4) {
            var err = new Error('four!')
            err.message = 'err four!'
            err.name = 'aaa';
            err.code = 401;
            throw err;
            // throw 'four!';
        }
        return n;
    })
    .catch(err => {
        throw err;
    })
    .subscribe(
        x => console.log(x),
        err => {
            // console.log(err);
            if (err.code == 401) {
                console.log(err.name);
            }
        }
    );

var Rx = require('rxjs/Rx');
var Observable = require('rxjs/Observable').Observable;

Observable.of(1, 2, 3).map(function (x) {
    return x + '!!!';
}).subscribe(x => {
    console.log(x);
})


var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
});


observable.subscribe(x => {
    console.log(x);
})


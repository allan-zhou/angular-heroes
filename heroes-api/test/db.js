var db = require('../mock-db');
var _ = require('lodash');

// console.log(db.heroes);

var ids = db.heroes.map((x) => {
    // console.log(x.id);
    return x.id;
});


console.log(_.maxBy(db.heroes, o => o.id));
console.log(_.remove(db.heroes, o => o.id == 11));
console.log(db.heroes.length);

let id = 15;
var obj = db.heroes.find(o => o.id == id);
console.log(obj);
obj.name = obj.name + 'test';
console.log(db.heroes);

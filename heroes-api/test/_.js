var _ = require('lodash');
var db = require('../mock-db');


var commodity = db.commodities.find(o => o.id == 1);
// console.log(commodity);



// c1.name ="haha";
// console.log(commodity);
// console.log(c1);
// console.log(c2);

var obj = {
    name: 'hello',
    subObj: {
        name: 'sub'
    }
}
console.log(obj);

// var fn = function (params) {
//     return params;
// }
// console.log(fn instanceof Object);
// console.log(fn instanceof Function);
// console.log(typeof fn);
// console.log(fn);

var c1 = _.clone(obj);
console.log(c1);
console.log(obj == c1);
console.log(obj.subObj === c1.subObj);

var c2 = _.cloneDeep(obj);
console.log(c2);
console.log(obj == c2);
console.log(obj.subObj === c2.subObj);


console.log('================================');
console.log('================================');
const objects = [{ 'a': 1 }, { 'b': 2 }]

const shallow = _.clone(objects)
console.log(shallow == objects);
console.log(shallow[0] === objects[0]);

const deep = _.cloneDeep(objects)
console.log(deep == objects);
console.log(deep[0] === objects[0])

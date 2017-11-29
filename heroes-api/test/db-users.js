var db = require('../mock-db');
var _ = require('lodash');

var username = 'admin';
var password = 'admin';

var result = db.users.find(o => o.username == username && o.password == password);
if(result){
    var cloned = _.clone(result);
    delete cloned.password;
    console.log(result);
    console.log(cloned);
}
else{
    console.log(result);
}



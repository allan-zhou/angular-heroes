const jwt = require('jsonwebtoken');

const secret = 'mysecret';

let token = jwt.sign({ data: 'my data', username: 'zhangsan', orgName: 'org1' }
    , secret, { expiresIn: 60 * 60 })
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4iLCJuaWNrTmFtZSI6IkFETUlOIiwiaWF0IjoxNTEyMDI3NjU1LCJleHAiOjE1MTIwMzEyNTV9.ipl7sot9TP4lJPkEeTuXBtfjFAvGQ7R0AxqMisiHeSM';
console.log(token);

jwt.verify(token, secret, (err, decoded) => {
    // console.log(decoded);
});

let dToken = jwt.decode(token)
console.log(dToken);

// let now = Date.now();
console.log(new Date(dToken.iat));
console.log(new Date(dToken.exp));
var now = Math.floor(Date.now() / 1000);
var newexp = Math.floor(Date.now() / 1000) + 6* 60;
console.log(now);
console.log(now - dToken.iat > 3600);
console.log(now - newexp > 3600);


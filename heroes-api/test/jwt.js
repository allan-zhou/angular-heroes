const jwt = require('jsonwebtoken');

const secret = 'mysecret';

let token = jwt.sign({ data: 'my data', username:'zhangsan', orgName:'org1' }
    , secret, { expiresIn: 60 * 60 })
console.log(token);

jwt.verify(token, secret, (err, decoded) => {
    // console.log(decoded);
    // console.log(decoded.iat);
});

let dToken = jwt.decode(token)
console.log(dToken);


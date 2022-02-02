const jwt = require('jsonwebtoken');

// encriptar el header y el payload
const secret = 'myCat';

const payload = {
    // forma en la que se va identificar el usuario
    sub: 1,
    role: 'customer'
}

function signToken(payload, secret) {
    return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token);
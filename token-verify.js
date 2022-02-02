const jwt = require('jsonwebtoken');

// encriptar el header y el payload
const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0MzgyNjIwM30.qb9LvI7RFZDLSxNjZ9z8a_86lUnm5j0DPUAXPtPZPg8';

function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
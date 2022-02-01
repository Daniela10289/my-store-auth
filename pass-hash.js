const bcrypt = require('bcrypt');
const { func } = require('joi');

async function hashPassword() {
    // encriptar contraseña, el 10 es la cantidad de veces
    const myPassword = 'admin 123 .202';
    const hash = await bcrypt.hash(myPassword, 10);
    console.log(hash);
}

hashPassword();
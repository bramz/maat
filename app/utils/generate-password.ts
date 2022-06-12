import * as bcrypt from 'bcryptjs'

function encryptPassword(password: string): string {
    const encrypted = bcrypt.hashSync(password, 14)
    return encrypted
}

console.log(encryptPassword('testing'))

const bcrypt = require("bcrypt")

// const encryptedPassowrd = bcrypt.hashSync("1234", 10)
//     console.log(encryptedPassowrd)


const password = '1234'
const encodedPassword = '$2b$10$rFBKj2y9INwpb9VAnFcHBOfUfoPt6APHWAXC86IR6Y4Kxm/EnDrQ6'
const same = bcrypt.compareSync(password, encodedPassword) // sync

console.log(same)
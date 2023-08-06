const bcrypt = require('bcrypt');
const userData = require("./userData.json");
const fs = require("fs")

fs.readFile("./userData.json", "utf8", (err, data) => {
    if(err) {
        console.log(err)
    } else {
        const saltRounds = 10;

        const pass0 = bcrypt.hash(userData[0].password, saltRounds)
        const pass1 = bcrypt.hash(userData[1].password, saltRounds)
        const pass2 = bcrypt.hash(userData[2].password, saltRounds)
        const pass3 = bcrypt.hash(userData[3].password, saltRounds)

        return (pass0, pass1, pass2, pass3)
    }
})
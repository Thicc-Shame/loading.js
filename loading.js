module.exports = {
    displayLoadingMsg:main
}
messagesJSON = require("./messages.json")

async function printDots() {
    process.stdout.write(".")
}

function main() {
    let messages = messagesJSON.messages
    let msg = messages[Math.floor(Math.random()*messages.length)]
    process.stdout.write(msg)
    return setInterval(printDots,750)
}



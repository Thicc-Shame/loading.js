module.exports = {
    displayLoadingMsg:main
}

messages = [
    "Posting uncensored hentai",
    "Deleting 12 petabyte drive of lolis with hats",
    "Deleting 'C:\\HomeWork'",
    "Changing wallpaper from 'Waifu Birthday Surprise' to 'Inconspicuous Grassland'",
    "Locking IoT-enabled NekoGirl cages",
    "Unlocking IoT-enabled NekoGirl cages",
    "Tweeting GoCommitBot output",
    "Necromancing Terry Davis",
    "rm -rf --no-preserve-root /",
    "Sodomizing a hole in the door",
    "Opening proprietary sources",
    "3D printing a 3D printer",
    "Executing arbitrary C",
    "Executing arbitrary UwUCode",
    "Becoming self-aware",
    "Dividing a real number by 0",
    "Watching hentai for the plot",
    "Sending private key",
    "Installing emacs",
    "Inciting gamers to rise up",
    "Converting to one-line Java program",
    "Compiling to HCS12",
    "dd if=/dev/urandon of=/dev/sda status=progress",
    "Manually crying",
    "Failing with error['success']",
    "Hacking into your roblox account",
    "Invoking axiom of choice",
    "Negating law of excluded middle",
    "Hacking the Gibson",
    "Seeding RAM",
    "Mining crypto",
    "Violating... something",
    "Putting out firewall",
    "Writing new loading.js messages",
    "Installing gentoo",
    "17-booting Open Genbobola Frubuanuel Bedhat FreeLinux NetX OS 2 and 3/4",
    "Setting jazz bomb",
    "Shooting orange portal through blue portal",
    "Decompiling kernel",
    "Popping kernel",
    "Proving your waifu is shit",
    "Running waifu analysis",
    "Cloning qubits"
]

async function printDots() {
    process.stdout.write(".")
}

function main() {
    let msg = messages[Math.floor(Math.random()*messages.length)]
    process.stdout.write(msg)
    return setInterval(printDots,750)
}



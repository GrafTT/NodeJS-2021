let stdin = process.openStdin();

stdin.addListener("data", function (d) {
    process.stdout.write(`${d.reverse()}\n`);
});
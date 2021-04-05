process.stdin.addListener("data", chunk => {
    process.stdout.write(String(chunk)
                            .trim()
                            .split('')
                            .reverse()
                            .join(''));
});
const date = new Date();

console.log(`
${
date.getHours() >12 ? date.getHours() - 12:date.getHours()
}:${date.getMinutes()}:${date.getSeconds()} ${
date.getHours() >12 ? "PM":"AM"
}
`);
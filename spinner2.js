process.stdout.write('hello from spinner2.js... \rheyyy\n');
const lines = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let delay = -100;

for (let i = 0; i < 8; i++) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${lines[i]}   `);
  }, delay);
}
import childProcess from 'child_process';
const spawn = childProcess.spawn;

const server = spawn('npm', ['start'], { stdio: 'inherit' });
const selenium = spawn('selenium-standalone', ['start'], { stdio: 'inherit' });
const ftest = spawn('wdio', ['tests/functional/wdio.conf.js'], { stdio: 'inherit' });

ftest.on('close', (code) => {
  server.kill();
  selenium.kill();
  spawn('pkill', ['-f', 'selenium-standalone']);
  spawn('pkill', ['-f', 'babel-node']);
});

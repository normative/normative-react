import childProcess from 'child_process';
const spawn = childProcess.spawn;

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  spawn('npm', ['run', 'build'], { stdio: 'inherit' });
}

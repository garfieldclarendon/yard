// from here: https://github.com/fullstackreact/food-lookup-demo/blob/master/start-client.js

const args = ['run', 'dev'];
const opts = { stdio: 'inherit', cwd: './src/components', shell: true }; // eslint-disable-line sort-keys
require('child_process').spawn('npm', args, opts);

const fs = require('fs');

try {
  const html = fs.readFileSync('index.html', 'utf8');
  if (html.includes('id="message"')) {
    console.log('Test passed.');
    process.exit(0);
  } else {
    console.error('Test failed: message element missing.');
    process.exit(1);
  }
} catch (err) {
  console.error('Test failed:', err);
  process.exit(1);
}

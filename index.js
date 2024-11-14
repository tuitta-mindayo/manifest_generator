import {fs} from 'fs';
const data = JSON.parse(fs.readFileSync("/manifest.json", 'utf8'));
fs.writeFileSync(RESULT_FILE, JSON.stringify(data));
fs.writeFileSync(RESULT_FILE, JSON.stringify(data));
const button = document.getElementById('button');
button.addEventListener('click', pushButton1);
button.addEventListener('click', pushButton2);

function pushButton1() {
  alert('クリックされました -1-');
}

function pushButton2() {
  alert('クリックされました -2-');
}


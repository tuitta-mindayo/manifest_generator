import { rManifest } from "./data.js"
const button = document.getElementById('button');
button.addEventListener('click', pushButton1);
button.addEventListener('click', pushButton2);

function pushButton1() {
  alert('click1');
}

function pushButton2() {
  alert('click2');
}


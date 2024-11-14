const manifest = `{
"format_version": 2,
    "header": {
        "description": "アドオンの説明文",
        "name": "アドオンの名前",
        "uuid": "uuid1",
        "version": [0, 0, 1],
        "min_engine_version": [ 1, 21, 50 ]
    },
    "modules": [
        {
            "description": "アドオンの説明文",
            "type": "resources",
            "uuid": "uuid2",
            "version": [0, 0, 1]
        }
    ]
}`
const button = document.getElementById('button');
button.addEventListener('click', pushButton1);
button.addEventListener('click', pushButton2);

function pushButton1() {
  alert('click1');
}

function pushButton2() {
  alert('クリックされました -2-');
}


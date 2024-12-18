//import data
import { normalManifest, scriptManifest } from "./data.js";

//getElements
const name = document.getElementById('name');
const description = document.getElementById('description');
const addonType = document.getElementById('addonType');
const minVersion = document.getElementById('minVersion');
const make = document.getElementById('make');

//EventListeners
make.addEventListener('click', makeFile);

//function
function makeFile() {
  if(name.value != "" && description.value != "")
  {
    //make array
    let version = minVersion.select.value.split(".");

    let jsonData = "";
    //update json
    if(addonType.select.value == "script")
    {
      jsonData = JSON.parse(scriptManifest);
    }
    else
    {
      jsonData = JSON.parse(normalManifest);
    }
    
    //header
    jsonData.header.name = name.value;
    jsonData.header.description = description.value;
    jsonData.header.uuid = crypto.randomUUID();
    jsonData.header.min_engine_version[0] = parseInt(version[0],10);
    jsonData.header.min_engine_version[1] = parseInt(version[1],10);
    jsonData.header.min_engine_version[2] = parseInt(version[2],10);

    //modules
    jsonData.modules[0].description = description.value;
    jsonData.modules[0].type = addonType.select.value;
    jsonData.modules[0].uuid = crypto.randomUUID();

    //export manifest.json
    const json = JSON.stringify(jsonData, null, '  ');
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const linkTag = document.createElement('a');
    linkTag.href = url;
    linkTag.download = 'manifest.json';
    linkTag.click()

    URL.revokeObjectURL(url)
    linkTag.remove()
  }
  else
  {
    alert("アドオン名かアドオン説明文が設定されていません。");
  }
}

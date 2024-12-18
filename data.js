const normalManifest = `{
    "format_version": 2,
    "header": {
        "description": "アドオンの説明文",
        "name": "アドオンの名前",
        "uuid": "uuid1",
        "version": [0, 0, 1],
        "min_engine_version": [ 1, 21, 10 ]
    },
    "modules": [
        {
            "description": "アドオンの説明文",
            "type": "resources",
            "uuid": "uuid2",
            "version": [0, 0, 1]
        }
    ]
}`;

const scriptManifest = `{
    "format_version": 2,
    "header": {
        "description": "アドオンの説明文",
        "name": "アドオンの名前",
        "uuid": "uuid1",
        "version": [0, 0, 1],
        "min_engine_version": [ 1, 21, 10 ]
    },
    "modules": [
        {
            "description": "アドオンの説明文",
            "type": "script",
            "entry": "scripts/index.js",
            "uuid": "uuid2",
            "version": [0, 0, 1]
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "1.17.0-beta"
        },
        {
            "module_name": "@minecraft/server-ui",
            "version": "1.3.0"
        }
    ]
}`;

export {normalManifest, scriptManifest}

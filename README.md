# RPC ![Github All Releases](https://img.shields.io/github/downloads/purpzie/rpc/total.svg)  ![GitHub package version](https://img.shields.io/github/package-json/v/purpzie/rpc.svg?label=version) [![Uses discord-rich-presence](https://img.shields.io/badge/uses-discord--rich--presence-7289da.svg)](https://npmjs.com/package/discord-rich-presence) ![Made with love](https://img.shields.io/badge/made_with-love-f44195.svg) <img align="right" src="https://pbs.twimg.com/media/DAmTGsGXcAArQPB.png">

Rich Presence for Discord, no tokens required.
- Look fabulous with custom images in your playing status.
- Easy to use and understand.
- Save multiple presences for later!

## Install
1. If you haven't already, install [Node.js](https://nodejs.org/en/).
1. [Download the latest release of RPC.](https://github.com/purpzie/rpc/releases)
1. Run `npm i` in its folder from your console.

## How to Use
See the [example](./saves/example.js) to learn how to configure a save, which is what stores the information for your rich presence.

Use `npm run start` to run your default save, or `node rpc.js --use savename` for a different one.

### Custom Images
1. Go to the [developers page](https://discordapp.com/developers/applications/me) and create an application.
1. Scroll down to where it says in big bold letters "Rich Presence", and enable it.
1. Upload your images. Their names will be what to specify in the config as "largeImageName" and "smallImageName". Remember to save it!
1. Scroll up and grab its client ID. This is what you put as the first option in your saves.

<details><summary><b>Tips:</b> click to expand</summary>

You can create custom scripts in [package.json](./package.json) for shortcuts to your favorite saves.
```javascript
"scripts": {
  "start": "node rpc.js",
  "birb": "node rpc.js --use birbsarelife"
};
// 'npm run birb' starts the 'birbsarelife' save
```

You can also make a clickable file to start RPC, if you're a little too lazy to start up a console.
1. Open a text editor and input the command that would start RPC, like `node rpc.js --use myfavsave`
1. Save it inside RPC's main folder with whatever name you want, but make sure it has the `.bat` extension.
1. You can now make a shortcut to the `.bat` file on your desktop, and clicking it will start up RPC.
</details>

#### Extra configuration (optional)
You can modify [config.json](./config.json) for your needs.  
`default` - Default save to run when `--use` is not specified or if `npm run start` is used  
`saveFolder` - Path to save folder, if you wish to store them somewhere else

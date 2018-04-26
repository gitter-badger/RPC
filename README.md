# RPC ![Github All Releases](https://img.shields.io/github/downloads/purpzie/rpc/total.svg)  ![GitHub package version](https://img.shields.io/github/package-json/v/purpzie/rpc.svg?label=version) [![Uses discord-rich-presence](https://img.shields.io/badge/uses-discord--rich--presence-f44195.svg)](https://npmjs.com/package/discord-rich-presence)<img align="right" src="https://pbs.twimg.com/media/DAmTGsGXcAArQPB.png">

Rich Presence for Discord, no tokens required.
- Look fabulous with custom images in your playing status
- Easy to use and understand
- Save presences for later

## Install
1. If you haven't already, install [Node.js](https://nodejs.org/en/).
1. [Download the latest release of RPC.](https://github.com/purpzie/rpc/releases)
1. Run `npm i` in its folder from your console.

## How to Use
Use `npm run start` to run your default save, or `node rpc.js --use savename` for a different one.


**Tip:** You can create custom scripts in [package.json](./package.json).
```javascript
"scripts": {
  "start": "node rpc.js",
  "birb": "node rpc.js --use birbsarelife"
};
// 'npm run birb' starts the 'birbsarelife' save
```
  
### Setting up custom images
1. Go to the [developers page](https://discordapp.com/developers/applications/me) and create an application.
1. Scroll down to where it says in big bold letters "Rich Presence", and enable it.
1. Upload your images. Their names will be what to specify in the config as "largeImageName" and "smallImageName". Remember to save it!
1. Scroll up and grab its client ID. This is what you put as the first option in your saves.

#### [Extra configuration](./config.json) (optional)
- `default` - Default save to run when `--use` is not specified
- `saveFolder` - Path to save folder, if you wish to store them somewhere else

#### Future plans
- [ ] Perhaps a cool-looking menu?
- [ ] Editing saves restarts them live
- [ ] Rotating RPC (adjustable time change), this is done from the commandline
- [ ] Small file that helps you through creating your own save

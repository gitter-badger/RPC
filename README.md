# RPC
Uses [discord-rich-presence](https://github.com/devsnek/discord-rich-presence) to give you a simple way to save different presence configurations and use them later.

### Install
1. Clone or download this repo.
1. Run `npm i` in its directory.

That's it. There's only two steps.

**To set up custom images:**
<details>
  <summary>Click to expand</summary>

  1. Go to the [developers page](https://discordapp.com/developers/applications/me) and create an application.
  1. Scroll down to where it says in big bold letters "Rich Presence", and enable it.
  1. Upload your images. Their names will be what to specify in the config as "largeImageName" and "smallImageName". Remember to save it!
  1. Scroll up and grab its client ID. This is what you put as the first option in your saves.
</details>

-----

- See [the example](./saves/example.js) to learn how to configure a presence.
  - You can run this with `node start.js --use example`
- You can add and edit any saves you want! To run them, use `node start.js --use filename`
  - Naming any save "main" will run as default unless `--use` is specified
  - Please be sure not to use spaces in save names!

-----

### Future plans
- Clickable file to start program
- Perhaps a cool-looking menu?
- Editing saves restarts them live

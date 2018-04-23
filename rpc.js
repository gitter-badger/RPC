const DiscordRPC = require('discord-rich-presence');
const flag = require('flags');
const config = require ('./config.json');

// Extra safety measures.
process.on('unhandledRejection', console.error);

// get flag info
flag.defineString('use', config.default);
flag.parse();

const savePath = `${config.saveFolder}/${flag.get('use')}.js`;
const { app } = require(savePath); // This ID cannot be changed in save editing.
const rpc = DiscordRPC(app);

// Actually create the presence.
rpc.on('connected', () => {
  console.log(`Connected, using save: ${flag.get('use')}.`);

  updateStatus(require(savePath));

  // Silly Discord, you keep forgetting to keep it up.
  setInterval(
    () => {
      updateStatus(require(savePath))
    }, 30*60*1000 // 30 minutes
  )
});

/*
  Nobody will actually be able to join or
  spectate the presence, but these are here
  just in case users want the buttons to appear.
*/
rpc.on('join', secret => {
  console.log('we should join with', secret);
});
rpc.on('spectate', secret => {
  console.log('we should spectate with', secret);
});
rpc.on('joinRequest', user => {
  user.reply(user, 'NO');
});

// TIME FOR FUNCTIONS ---------------------------------------

// Change the save into an RPC-usable object.
function makeStatus(save) {
  return {
    instance: true,
    partyID: (save.partySize && save.partyMax) ? 'discord-multiple-rpc' : undefined,
    details: save.topText,
    state: save.bottomText,
    largeImageKey: save.largeImageName,
    largeImageText: save.largeImageHover,
    smallImageKey: save.smallImageName,
    smallImageText: save.smallImageHover,
    partySize: save.partySize,
    partyMax: save.partyMax,
    joinSecret: (save.joinButton) ? 'discord-multiple-rpc-joinButton' : undefined,
    spectateSecret: (save.spectateButton) ? 'discord-multiple-rpc-spectateButton' : undefined,
    startTimestamp: save.startTime,
    endTimestamp: save.endTime
  };
}

// Make the status do the thing.
function updateStatus(save) {
  rpc.updatePresence(
    makeStatus(save)
  );
}

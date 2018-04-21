const DiscordRPC = require('discord-rich-presence');
const flag = require('flags');

// get flag crap
flag.defineString('use', 'main');
flag.parse();
const save = require(`./saves/${flag.get('use')}.js`);
const rpc = DiscordRPC(save.app);

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

// Change the save into an RPC-usable object.
var status = {
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

// Actually create the presence.
rpc.on('connected', () => {
  console.log(`Connected, using save: ${flag.get('use')}.`);
  rpc.updatePresence(status);
});

// Extra safety measures.
process.on('unhandledRejection', console.error);
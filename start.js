const DiscordRPC = require('discord-rich-presence');
const flag = require('flags');

process.on('unhandledRejection', console.error);

// get flag crap
flag.defineString('use');
flag.parse();
const presence = require(`./saves/${flag.get('use')}.js`);

const rpc = DiscordRPC(presence.id);

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

// These are also included to make sure nothing breaks.
presence.data.instance = true;
presence.data.partyId = 'purpzie_birb_party';

// Actually create the presence.
rpc.on('connected', () => {
  console.log('connected');
  rpc.updatePresence(presence.data);
})
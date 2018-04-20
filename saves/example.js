module.exports = {

  // ID of app. name of app = title of game
  id: '385977971107954688',

  data: {
    // presence text, top and bottom
    details: 'MAXIMUM BEEP ENGAGED',
    state: 'beep beep beep beep beep beep',

    // main image.
    // the text displays when you hover, it is optional. same with small image.
    largeImageKey: 'bigboi',
    largeImageText: 'FRIEND',

    // small image next to it
    smallImageKey: 'smolboi',
    smallImageText: 'henlo',

    // display a party, this one shows (1 of 69)
    partySize: 1,
    partyMax: 69,

    // include these if you want the join or spectate buttons to appear, content doesn't matter
    joinSecret: 'heckity',
    spectateSecret: 'heckerooney',

    // include if you want to show elapsed time or time until something ends
    startTimestamp: Date.now(),
    endTimestamp: Date.now()+1337
  }

};
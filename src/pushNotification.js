var apn = require('apn');

var options = {
    token: {
      key: process.env.APN_KEY,
      keyId: process.env.APN_KEY_ID,
      teamId: process.env.APN_TEAM_ID
    },
    production: false
};
  
var apnProvider = new apn.Provider(options);
var note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600;
note.topic = "com.scott874.Notificoaster";

const send = (deviceToken, temperature) => {
    note.alert = "Your beverage is ready at " + temperature + '°C';
    apnProvider.send(note, deviceToken).then( (result) => {
        console.log(result)
    });
}

module.exports = {
    send: send
}
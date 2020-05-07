var TruckyAPIClient = require('./index.js');

var api = new TruckyAPIClient("Trucky Discord Bot");
api.servers().then((response) => {
    console.log('servers loaded');
});

api.events().then(function(response) {
    console.log('pois loaded');
});

api.resolveVanityUrl("dowmeister").then( (response) => {
    console.log('vanity url resolved');
});
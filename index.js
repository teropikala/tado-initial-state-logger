// Load configuration from .env
require('dotenv').config()

// Import the Tado client
const Tado = require('node-tado-client');

// Import and configure Initial State client
var IS = require('initial-state');
var bucket = IS.bucket(process.env.IS_BUCKET_KEY, process.env.IS_ACCESS_KEY);

// Create a new Tado instance
var tado = new Tado();

// Login to the Tado Web API
tado.login(process.env.TADO_USERNAME, process.env.TADO_PASSWORD).then((token) => {

    tado.getZones(process.env.TADO_HOME_ID).then(resp => {
        resp.forEach(zone => {

            tado.getZoneState(538749, zone.id).then(state => {
                bucket.push("Tado Temperature " + zone.name, state.sensorDataPoints.insideTemperature.celsius);
            });
        });
    });
});

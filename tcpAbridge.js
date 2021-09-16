const debug = require('debug');
const BridgeClass = require('tcp-bridge');
const Bridge = new BridgeClass(debug);

const firstUid = Bridge.addPoint({
    port: 2020,
    encoding: 'utf8',
});
Bridge.addPoint({
    port: 3030,
    reconnectOnClose: false,
    reconnectOnHasSendData: true,
    encoding: 'utf8',
});
Bridge.addPoint({
    port: 4040,
    encoding: 'utf8',
});
Bridge.addPoint({
    port: 5050,
    encoding: 'utf8',
});

Bridge.removePoint(firstUid);

const lastUid = Bridge.addPoint({
    port: 6060,
    encoding: 'utf8',
});

const point = Bridge.getPoint(lastUid);
point.on('ready', data => {
    console.log('READY');
});
point.on('data', data => {
    console.log('DATA', data);
});


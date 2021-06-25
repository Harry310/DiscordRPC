const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "Playing on PoliceRP",
            assets : {
                large_image : "largeimage",
                large_text : "Riverside Roleplay"
            },
            buttons : [{label : "Connect" , url : "http://rsrp.uk/connect"},{label : "Website",url : "http://rsrp.uk"}]
        }
    });
});
client.login({ clientId : "856945568537116692" }).catch(console.error);

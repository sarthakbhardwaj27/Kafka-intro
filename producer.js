const {kafka} = require('./client')

async function init(){
    const producer = kafka.producer();
    console.log(`Connecting Producer...`);
    await producer.connect();
    console.log(`Producer connected`)

    await producer.send({
        topic: 'rider-updates',
        messages: [
            {
                partition: 0,
                key: "location-update",
                value: JSON.stringify({name: "Tony Stark", loc: "SOUTH"}),
            },
        ],
    });
    await producer.disconnect();
    console.log(`Producer disconnected`)
}

init();
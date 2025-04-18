const {kafka} = require('./client');

async function init(){
    const consumer = kafka.consumer({
        groupId: "user-1",
    })
    console.log(`Connecting to consumer..`)
    await consumer.connect();
    console.log(`Consumer connected`)
    await consumer.subscribe({topics: ['rider-updates'], fromBeginning: true});

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`[${topic}]: PART:${partition}}:`,message.value.toString());
        },
    });
}

init();
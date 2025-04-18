const { kafka } = require("./client");

async function deleteTopic() {
  const topic = process.argv[2];

  if (!topic) {
    console.error("❌ Please provide a topic name!");
    process.exit(1);
  }

  const admin = kafka.admin();
  await admin.connect();

  const result = await admin.deleteTopics({
    topics: [topic],
  });

  console.log(`✅ Topic deleted: ${topic}`);
  await admin.disconnect();
}

deleteTopic();

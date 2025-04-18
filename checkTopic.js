const { kafka } = require("./client");

async function checkTopicMetadata() {
  const admin = kafka.admin();
  await admin.connect();

  const metadata = await admin.fetchTopicMetadata({ topics: ["rider-updates"] });
  console.log(JSON.stringify(metadata, null, 2));

  await admin.disconnect();
}

checkTopicMetadata();

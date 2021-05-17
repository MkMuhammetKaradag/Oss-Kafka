const { Kafka } = require("kafkajs");

async function createTopic() {
  const kafka = new Kafka({
    clientId: "kafka_log_store_client",
    brokers: ["kafka:9092"]
  });

  const admin = kafka.admin();
  //console.log("Kafka Broker'a bağlanılıyor...");
  await admin.connect();
  //console.log("Kafka Broker'a bağlantı başarılı, Topic üretilecek..");
  try {
    // Admin Stuff..
    await admin.createTopics({
      topics: [
        {
          topic: "LogStoreTopic",
          numPartitions: 2
        }
      ]
    });
    console.log("Topic Başarılı bir şekilde oluşturulmuştur...");
    await admin.disconnect();
  } catch (error) {
    console.log("Bir Hata Oluştu", error);
  } finally {
    //process.exit(0);
  }
}

module.exports.getcreateTopic=createTopic;
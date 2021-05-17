const { Kafka } = require("kafkajs");

createConsumer();

async function createConsumer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_log_store_client",
      brokers: ["kafka:9092"]
    });

    const consumer = kafka.consumer({
      groupId: "ornek_3"
    });

    console.log("Consumer'a bağlanılıyor..");
    await consumer.connect();
    console.log("Bağlantı başarılı.");


    await consumer.subscribe({
      topic: "LogStoreTopic",
      fromBeginning: true
    });

    await consumer.run({
      eachMessage: async result => {
        console.log(
          `Gelen Mesaj ${result.message.value}, Par => ${result.partition}`
        );
      }
    });
  } catch (error) {
    console.log("Bir Hata Oluştu", error);
  }
}
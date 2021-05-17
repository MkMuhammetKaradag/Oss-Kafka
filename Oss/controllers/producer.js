const { Kafka } = require("kafkajs");

let producer;
run();
async function  run(){
   const kafka = new Kafka({
    clientId: "kafka_log_store_client",
    brokers: ["kafka:9092"]
  });
  
  producer = kafka.producer();
  console.log("Producer'a bağlanılıyor..");
  await producer.connect();
  console.log("Bağlantı başarılı.");
  
}

async function createProducer(req,res){
 
  log_data=req.body;

  try {
    
    let messages = log_data.map(item => {
      return {
        value: JSON.stringify(item),
        partition: item.id == "1" ? 0 : 1
      };
    });

    const message_result = await producer.send({
      topic: "LogStoreTopic",
      messages: messages
    });
    res.send(message_result);
  } catch (error) {
    console.log("Bir Hata Oluştu", error);
  } 
}
module.exports.postcreateProducer=createProducer;
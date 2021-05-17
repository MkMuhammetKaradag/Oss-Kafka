const express = require('express');
// const topicController=require('../Controllers/topic.js');
// const consumerController=require('../Controllers/consumer.js');
const producerController=require('../Controllers/producer.js');
const router = express.Router();


//router.get('/topic',topicController.getcreateTopic);
//router.get('/consumer',consumerController.getcreateConsumer);
router.post('/producer',producerController.postcreateProducer);
module.exports  = router;

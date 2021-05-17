const express = require('express');
const routes = require('./Routes/router.js');
const {getcreateTopic}=require('./controllers/topic.js');
const app = express();
const port = 3000;
getcreateTopic();
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use(routes);
// app.get('/consumer', (req, res) => {
//     res.send('consumer')
//     console.log("Consumer")
//   })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
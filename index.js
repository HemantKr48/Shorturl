const express = require('express');
const { connectMongoDb } = require('./connect.js');
const PORT = 8001;
const url = "mongodb+srv://hemantkumar48200:Hemant200@cluster0.ulzzhjj.mongodb.net/shortUrl";
const app = express();
const urlRouter=require('./routes/url.js');

connectMongoDb(url).then(console.log('database connected ')).catch((err) => console.log("err", err));
app.use(express.json());
app.use('/url',urlRouter);

app.listen(PORT, () => console.log(`server runnning on ${PORT}`));
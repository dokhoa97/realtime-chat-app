const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const userRouter = require('./Routes/userRoute');
const chatRouter = require('./Routes/chatRoute');
const messageRouter = require('./Routes/messageRoute');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);
app.use('/api/chats', chatRouter);


app.get('/', (req, res) => {
    res.send('Welcome our chat app APIs..')
});

const port = process.env.PORT || 3030;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`)
});

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('MongoDB connection established'))
    .catch((error) => console.log('MongoDB connection failed: ', error.message));
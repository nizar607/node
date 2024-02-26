  // "type":"module",
const express = require('express');
const app = express();
const UserRouter = require('./routes/user');
const ClassroomRouter = require('./routes/classroom');
const dbConfig = require('./config/db.json');
const {default: mongoose} = require('mongoose');
app.use(express.json());
app.use('/users', UserRouter);
app.use('/classrooms', ClassroomRouter);

async function main() {
    try {
        console.log('connecting to db');
        await mongoose.connect(dbConfig.url);
        console.log('db connected');
        app.listen(3000, () => {
            console.log('Server is listening on port 3000');
        });
    } catch (error) {
        console.log('🚀 ~ main ~ error:', error);
    }
}

main();

import { app } from './app.js';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("CONNECTED TO MONGO")
    app.listen(3001, () => {
        console.log("SERVER IS RUNNING ON PORT 3001")
    })
})

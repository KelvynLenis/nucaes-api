import express, { json } from 'express';
import { database } from './database/database';
import router from './routes';

const app = express();
app.use(json());
app.use(router);

app.listen(3000, async () => {
    await database.sync();
    console.log("App running in port 3000");
});
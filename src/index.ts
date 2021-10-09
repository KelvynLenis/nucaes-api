import express, { json } from 'express';
import { SyncModels } from './database/models/index';
import router from './routes';

const app = express();
app.use(json());
app.use(router);
SyncModels();

app.listen(3000, async () => {
    console.log("App running in port 3000");
});
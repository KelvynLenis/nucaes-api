import express, { json } from 'express';
import { database } from './database/models/index';
import router from './routes';

const app = express();
app.use(json());
app.use(router);

database.sequelize.sync().then(() => {
    app.listen(3333, () => {
        console.log("App running in port 3333");
    });
}).catch(() => console.log("Error on sync database"));
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import authenticate from '../http/middlewares/authenticate';
import * as routes from '../routes/routes';
// import history from 'connect-history-api-fallback';

dotenv.config();

const app = express();
const apiRoot = process.env.API_ROOT;
const morganMode = process.env.MORGAN_MODE;
const storageFolder = process.env.STORAGE_FOLDER;
const wwwFolder = process.env.WWW_FOLDER;

app.set('port', process.env.HTTP_PORT);
app.use(morgan(morganMode));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(history());
app.use(express.static(path.join(__dirname, '..', wwwFolder)));
app.use(`/${storageFolder}`, express.static(path.join(__dirname, '..', storageFolder)));

app.use(apiRoot, routes.open);
app.use(apiRoot, authenticate);
// app.use(apiRoot, routes.authenticated);
const server = {
  start: () => {
    app.listen(app.get('port'), () => {
      console.log(`Servicio iniciado en el puerto ${app.get('port')} (${process.env.NODE_ENV})`); // eslint-disable-line
    });
  },
};

export default server;

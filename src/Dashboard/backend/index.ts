import express, { Express, Request, Response } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import dbConfig from './config/database';
import bodyParser from 'body-parser';


import corsConfigs from './config/cors';

import crossRouter from './routes/crossRouter'
import recieverRouter from './routes/recieverRouter'
import goblinFinderRouter from './routes/goblinFinder'
import gameRouter from './routes/gameRouter'
import tagRouter from './routes/tagRouter'
import readerRouter from './routes/readerRouter'
import relayRouter from './routes/relayRouter'
import mediaPlayerRouter from './routes/mediaPlayerRouter'







dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.APP_PORT || '8000', 10);


mongoose.connect(dbConfig.url)
  .then(() => {
    console.log('Database:' + dbConfig.url + ' connected successfully.');
  })
  .catch((err) => {
    console.log('Error while connecting to database, Error: ', err);
  });

// Allow all origins - you might want to configure this to match your frontend's domain
app.use(cors(corsConfigs));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use('/cross', crossRouter)
app.use('/goblinFinder', goblinFinderRouter)
app.use('/goblinFinder', goblinFinderRouter)
app.use('/reciever', recieverRouter)
app.use('/game', gameRouter)
app.use('/tag', tagRouter)
app.use('/reader', readerRouter)
app.use('/relay', relayRouter)
app.use('/mediaplayer', mediaPlayerRouter)

async function startServer() {
  try {

    app.listen(port, () => {
      console.log(`WhaleCMS port: ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();



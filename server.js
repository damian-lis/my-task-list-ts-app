import express from 'express';

const app = express();

app.use(express.static('build'));

let listenPort = process.env.PORT || 3000;

app.listen(listenPort, () => {
  console.log('server running on port ' + listenPort);
});

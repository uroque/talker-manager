const express = require('express');
const bodyParser = require('body-parser');
const { readFile } = require('fs/promises');

const TALKER_LIST = './talker.json';

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res, next) => {
  try {
    const talkerList = JSON.parse(await readFile(TALKER_LIST, 'utf-8'));
    return res.status(HTTP_OK_STATUS).json(talkerList);
  } catch (err) {
    return next(err);
  }
});

app.listen(PORT, () => {
  console.log('Online');
});

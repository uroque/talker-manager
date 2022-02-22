const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;
    const talkerList = JSON.parse(await readFile('talker.json'));

    if (!q || q === '') { return res.status(200).json(talkerList); }

    const talkersFound = talkerList.filter((talker) => talker.name.includes(q));

    if (!talkersFound) { return res.status(200).json([]); }

    return res.status(200).json(talkersFound);
  } catch (error) {
    return next(error);
  }
};
const { readFile, writeFile } = require('fs/promises');

const postNewTalker = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const talkerList = JSON.parse(await readFile('talker.json', 'utf-8'));
    const newTalker = { id: talkerList.length + 1, name, age, talk };
    talkerList.push(newTalker);
    await writeFile('talker.json', JSON.stringify(talkerList));

    return res.status(201)
      .json(newTalker);
  } catch (error) {
    return next(error);
  }
};

module.exports = postNewTalker;
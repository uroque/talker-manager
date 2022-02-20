const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkerList = JSON.parse(await readFile('talker.json'));

    const newTalkerList = talkerList.filter((talker) => talker.id !== Number(id));
    await writeFile('talker.json', JSON.stringify(newTalkerList));

    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};
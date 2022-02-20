const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;

    const talkerList = JSON.parse(await readFile('talker.json', 'utf-8'));

    const newTalkerData = { id: Number(id), name, age, talk };
    
    const editTalker = talkerList.filter((talker) => Number(talker.id) !== Number(id));
    editTalker.push(newTalkerData);

    await writeFile('talker.json', JSON.stringify(editTalker));

    return res.status(200)
      .send(newTalkerData);
  } catch (error) {
    return next(error);
  }
};
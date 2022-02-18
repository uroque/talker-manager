const validateName = (req, res, next) => {
  try {
    const { name } = req.body;
    
    if (!name || name === '') {
      return res.status(400)
        .send({ message: 'O campo "name" é obrigatório' });
    } 
    
    if (name.length < 3) {
      return res.status(400)
        .send({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

const validateAge = (req, res, next) => {
  try {
    const { age } = req.body;
  
    if (!age || age === '') {
      return res.status(400)
        .send({ message: 'O campo "age" é obrigatório' });
    }
  
    if (Number(age) < 18) {
      return res.status(400)
        .send({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
  
    return next();
  } catch (error) {
    return next(error);
  }
};

const validateTalk = (req, res, next) => {
  try {
    const { talk } = req.body;

    if (!talk || !talk.watchedAt || !talk.rate) {
      return res.status(400)
        .send({ 
          message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
        });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

const validateWatchedAt = (req, res, next) => {
  try {
    const { talk } = req.body;

    // https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy

    const DATE_REGEX = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (!DATE_REGEX.test(talk.watchedAt || talk.watchedAt === '')) {
      return res.status(400)
        .send({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

const validateTalkRate = (req, res, next) => {
  try {
    const { talk } = req.body;

    if (Number(talk.rate < 1) || Number(talk.rate) > 5) {
      return res.status(400)
        .send({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = ({
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateTalkRate,
});
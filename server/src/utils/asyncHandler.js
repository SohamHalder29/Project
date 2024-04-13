function asynHandler(func) {
  return async function (req, res, next) {
    try {
      return await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = asynHandler;

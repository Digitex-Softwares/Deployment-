module.exports = (req, res, next) => {
  // fake logged in user
  req.user = { id: 1 };
  next();
};

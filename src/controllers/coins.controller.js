const service = require('../services/coins.service');

exports.balance = async (req, res) => {
  const result = await service.getBalance(req.user.id);
  res.json(result);
};

exports.packages = async (req, res) => {
  const result = await service.getPackages();
  res.json(result);
};

exports.history = async (req, res) => {
  const result = await service.getHistory(req.user.id);
  res.json(result);
};

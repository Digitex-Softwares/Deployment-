const service = require('../services/bots.service');

exports.listBots = async (req, res) => {
  const result = await service.getAll();
  res.json(result);
};

exports.getBot = async (req, res) => {
  const result = await service.getBySlug(req.params.slug);
  res.json(result);
};

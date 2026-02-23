const service = require('../services/deployments.service');

exports.createDeployment = async (req, res) => {
  try {
    const result = await service.deployBot(req.user.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDeployments = async (req, res) => {
  const result = await service.listDeployments(req.user.id);
  res.json(result);
};

exports.getDeployment = async (req, res) => {
  const result = await service.getDeployment(req.user.id, req.params.id);
  res.json(result);
};

exports.restartDeployment = async (req, res) => {
  await service.restart(req.user.id, req.params.id);
  res.json({ success: true });
};

exports.deleteDeployment = async (req, res) => {
  await service.delete(req.user.id, req.params.id);
  res.json({ success: true });
};

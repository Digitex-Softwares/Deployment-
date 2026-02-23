const axios = require('axios');

const headers = {
  Authorization: `Bearer ${process.env.HEROKU_API_KEY}`,
  Accept: "application/vnd.heroku+json; version=3",
  "Content-Type": "application/json"
};

exports.createApp = async (name) => {
  const res = await axios.post(
    "https://api.heroku.com/apps",
    { name, region: "us" },
    { headers }
  );
  return res.data;
};

exports.setConfigVars = async (appName, env) => {
  await axios.patch(
    `https://api.heroku.com/apps/${appName}/config-vars`,
    env,
    { headers }
  );
};

exports.triggerBuild = async (appName, tarballUrl) => {
  const res = await axios.post(
    `https://api.heroku.com/apps/${appName}/builds`,
    {
      source_blob: { url: tarballUrl }
    },
    { headers }
  );
  return res.data;
};

exports.restartDynos = async (appName) => {
  await axios.delete(
    `https://api.heroku.com/apps/${appName}/dynos`,
    { headers }
  );
};

exports.deleteApp = async (appName) => {
  await axios.delete(
    `https://api.heroku.com/apps/${appName}`,
    { headers }
  );
};
